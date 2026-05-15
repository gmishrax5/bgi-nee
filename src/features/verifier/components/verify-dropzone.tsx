"use client";

import { useState } from "react";
import { UploadCloud, ShieldCheck, ShieldAlert, XCircle, FileText, Loader2, Search } from "lucide-react";

export default function VerifyDropzone() {
  const [file, setFile] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<"valid" | "invalid" | "revoked" | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleVerify(droppedFile);
  };

  const handleVerify = (selectedFile: File) => {
    setFile(selectedFile);
    setIsVerifying(true);
    setResult(null);

    // Mock verification delay
    setTimeout(() => {
      setIsVerifying(false);
      // Random result for demo
      setResult("valid");
    }, 2000);
  };

  const reset = () => {
    setFile(null);
    setResult(null);
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
          Verify Document Authenticity
        </h1>
        <p className="text-gray-400 text-lg">
          Upload any document to check if it has been issued and remains valid on the blockchain.
        </p>
      </div>

      {!file && (
        <div className="glass-panel border border-white/10 rounded-2xl p-1 relative overflow-hidden">
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-xl opacity-50 pointer-events-none" />
          
          <div 
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="w-full bg-black/40 border-2 border-dashed border-white/10 hover:border-purple-500/50 rounded-xl p-16 flex flex-col items-center justify-center transition-all duration-300 relative z-10"
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-gray-400 mb-6">
              <UploadCloud size={40} />
            </div>
            <h3 className="text-xl font-medium text-gray-200 mb-2">Drag & Drop Document</h3>
            <p className="text-sm text-gray-500 text-center max-w-sm mb-8">
              We accept PDF, PNG, or JPG files. Your file is never uploaded to our servers; the cryptographic hash is computed locally in your browser.
            </p>
            <label className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              Browse Files
              <input 
                type="file" 
                className="hidden" 
                onChange={(e) => e.target.files && handleVerify(e.target.files[0])}
              />
            </label>
          </div>
          
          <div className="mt-8 flex items-center gap-4 px-8 pb-8">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">OR VERIFY BY HASH</span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>
          
          <div className="px-8 pb-8 flex gap-3 relative z-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Enter Document Hash (0x...)" 
                className="w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-gray-200 outline-none focus:border-purple-500/50 transition-colors" 
              />
            </div>
            <button className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors border border-white/5">
              Verify
            </button>
          </div>
        </div>
      )}

      {/* Verifying State */}
      {isVerifying && (
        <div className="glass-panel border border-white/10 rounded-2xl p-16 flex flex-col items-center justify-center text-center">
          <Loader2 size={48} className="text-purple-500 animate-spin mb-6" />
          <h3 className="text-xl font-medium text-gray-200 mb-2">Analyzing Cryptographic Signature...</h3>
          <p className="text-sm text-gray-500">Querying the smart contract for {file?.name}</p>
        </div>
      )}

      {/* Result State */}
      {result && !isVerifying && (
        <div className={`glass-panel border rounded-2xl p-8 relative overflow-hidden ${
          result === "valid" ? "border-green-500/30" : 
          result === "revoked" ? "border-orange-500/30" : "border-red-500/30"
        }`}>
          {/* Status Background Glow */}
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none ${
            result === "valid" ? "bg-green-500" : 
            result === "revoked" ? "bg-orange-500" : "bg-red-500"
          }`} />

          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${
              result === "valid" ? "bg-green-500/20 text-green-400" : 
              result === "revoked" ? "bg-orange-500/20 text-orange-400" : "bg-red-500/20 text-red-400"
            }`}>
              {result === "valid" && <ShieldCheck size={32} />}
              {result === "revoked" && <ShieldAlert size={32} />}
              {result === "invalid" && <XCircle size={32} />}
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-100 mb-2">
                {result === "valid" ? "Document is Authentic" : 
                 result === "revoked" ? "Document was Revoked" : "Document Not Found"}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {result === "valid" ? "The cryptographic hash of this document exactly matches a record on the blockchain. It has not been tampered with." : 
                 result === "revoked" ? "This document was previously issued but has since been revoked by the issuer." : 
                 "We could not find any record of this document on the blockchain. It may be forged or tampered with."}
              </p>

              {result === "valid" && (
                <div className="space-y-3 mb-8">
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Issuer</span>
                    <span className="text-sm font-medium text-gray-200">Stanford University (0x4a...9b)</span>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Issue Date</span>
                    <span className="text-sm font-medium text-gray-200">May 14, 2025</span>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5 flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Document Hash</span>
                    <span className="text-xs font-mono text-gray-400 break-all">
                      e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                    </span>
                  </div>
                </div>
              )}

              <button 
                onClick={reset}
                className="bg-white/10 hover:bg-white/15 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors border border-white/5"
              >
                Verify Another Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
