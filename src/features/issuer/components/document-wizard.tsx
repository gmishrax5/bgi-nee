"use client";

import { useState } from "react";
import { UploadCloud, File, ShieldCheck, FileText, ArrowRight, Loader2 } from "lucide-react";

export default function DocumentWizard() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">
          Register Document
        </h1>
        <p className="text-gray-400 text-sm">
          Upload a credential or document to issue it on the blockchain. Once registered, it cannot be tampered with.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white/5 -z-10" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 -z-10" 
             style={{ width: `${((step - 1) / 2) * 100}%`, transition: 'width 0.5s ease-in-out' }} />
             
        {[
          { num: 1, label: "Upload" },
          { num: 2, label: "Metadata" },
          { num: 3, label: "Issue" }
        ].map((s) => (
          <div key={s.num} className="flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              step >= s.num 
                ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
                : "bg-black/50 border border-white/10 text-gray-500"
            }`}>
              {step > s.num ? <ShieldCheck size={18} /> : s.num}
            </div>
            <span className={`text-xs font-medium ${step >= s.num ? "text-purple-300" : "text-gray-500"}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="glass-panel border border-white/10 rounded-2xl p-8 relative overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]" />
        
        {step === 1 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className={`w-full max-w-xl border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center transition-all duration-300 ${
                file 
                  ? "border-purple-500/50 bg-purple-500/5" 
                  : "border-white/10 hover:border-purple-500/30 hover:bg-white/5"
              }`}
            >
              {file ? (
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-2">
                    <FileText size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-200">{file.name}</h3>
                    <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <button 
                    onClick={() => setFile(null)}
                    className="mt-4 text-sm text-red-400 hover:text-red-300 underline underline-offset-4"
                  >
                    Remove File
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-400 mb-6">
                    <UploadCloud size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-200 mb-2">Upload Document</h3>
                  <p className="text-sm text-gray-500 text-center max-w-sm mb-8">
                    Drag and drop your PDF, JPG, or PNG file here, or click to browse. Maximum file size is 10MB.
                  </p>
                  <label className="bg-white/10 hover:bg-white/15 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer border border-white/5">
                    Browse Files
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={(e) => e.target.files && setFile(e.target.files[0])}
                    />
                  </label>
                </>
              )}
            </div>
            
            <div className="mt-8 w-full max-w-xl flex justify-end">
              <button 
                onClick={() => setStep(2)}
                disabled={!file}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                Continue <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="py-6">
            <h3 className="text-xl font-medium text-gray-200 mb-6">Document Metadata</h3>
            <div className="space-y-6 max-w-xl">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Recipient Name (Optional)</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 outline-none focus:border-purple-500/50 transition-colors" placeholder="e.g. Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Document Reference / ID</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 outline-none focus:border-purple-500/50 transition-colors" placeholder="e.g. CERT-2026-891" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Expiry Date (Optional)</label>
                <input type="date" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 outline-none focus:border-purple-500/50 transition-colors" />
              </div>
            </div>

            <div className="mt-10 flex justify-between">
              <button 
                onClick={() => setStep(1)}
                className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                Review & Issue <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="py-6 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-xl font-medium text-gray-200 mb-2">Ready to Issue</h3>
            <p className="text-sm text-gray-500 text-center max-w-md mb-8">
              By confirming, a cryptographic hash of your document will be permanently stored on the blockchain. The actual file remains private.
            </p>

            <div className="w-full max-w-md bg-black/40 border border-white/10 rounded-xl p-4 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-gray-500">File Name</span>
                <span className="text-sm font-medium text-gray-300">{file?.name || "document.pdf"}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-gray-500">File Hash (SHA-256)</span>
                <span className="text-xs font-mono text-purple-400 truncate max-w-[200px]">0x8f43a9...b71c</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-500">Network Fee</span>
                <span className="text-sm font-medium text-gray-300">~0.002 ETH</span>
              </div>
            </div>

            <div className="flex gap-4 w-full max-w-md">
              <button 
                onClick={() => setStep(2)}
                className="flex-1 px-6 py-3 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5 transition-colors"
              >
                Go Back
              </button>
              <button 
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                Confirm Issue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
