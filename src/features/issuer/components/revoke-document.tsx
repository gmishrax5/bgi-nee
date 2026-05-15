"use client";

import { useState } from "react";
import { ShieldAlert, Search, ArrowRight, XCircle } from "lucide-react";

export default function RevokeDocument() {
  const [docHash, setDocHash] = useState("");

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-2">
          Revoke a Document
        </h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Permanently invalidate a previously issued document. Once revoked, anyone attempting to verify the document will be warned that it is no longer authentic.
        </p>
      </div>

      <div className="glass-panel border border-red-500/30 rounded-2xl p-10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col items-center mb-10 relative z-10">
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
            <ShieldAlert size={40} />
          </div>
          
          <div className="w-full max-w-lg space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Document Hash or Reference ID</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  value={docHash}
                  onChange={(e) => setDocHash(e.target.value)}
                  placeholder="e.g. 0x8f43a9... or CERT-2025-001" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-gray-200 outline-none focus:border-red-500/50 transition-colors" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Reason for Revocation</label>
              <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 outline-none focus:border-red-500/50 transition-colors appearance-none">
                <option value="">Select a reason...</option>
                <option value="expired">Document Expired</option>
                <option value="error">Issued in Error</option>
                <option value="fraud">Fraudulent Activity Detected</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5 mb-8 flex gap-4 max-w-lg mx-auto relative z-10">
          <XCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="text-red-300 font-medium text-sm mb-1">Warning: Irreversible Action</h4>
            <p className="text-red-400/80 text-xs leading-relaxed">
              Revoking a document writes a permanent status change to the blockchain. You cannot undo this action. The network fee will apply.
            </p>
          </div>
        </div>

        <div className="flex justify-center relative z-10">
          <button 
            disabled={!docHash}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-500 hover:to-orange-500 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            Confirm Revocation <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
