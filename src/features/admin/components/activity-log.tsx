"use client";

import { Activity, ShieldCheck, ShieldAlert, FilePlus, Filter, Download } from "lucide-react";

const activities = [
  { id: "TX-9021", action: "Document Issued", hash: "0x8f43...b71c", user: "Stanford University", type: "issue", date: "Today, 10:42 AM" },
  { id: "TX-9020", action: "Issuer Approved", hash: "0x3a1b...2c4d", user: "Admin", type: "approve", date: "Today, 09:15 AM" },
  { id: "TX-9019", action: "Document Verified", hash: "0x1a2b...9d3e", user: "Public Verifier", type: "verify", date: "Yesterday, 14:30 PM" },
  { id: "TX-9018", action: "Document Revoked", hash: "0x5c6d...2f1a", user: "MIT Tech Review", type: "revoke", date: "Yesterday, 11:20 AM" },
  { id: "TX-9017", action: "Document Issued", hash: "0x99dd...e11b", user: "Google Cloud", type: "issue", date: "May 12, 2025" },
];

export default function ActivityLog() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Network Activity</h1>
          <p className="text-gray-400">Global immutable ledger of all issuance, verification, and revocation events.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-black/40 border border-white/10 hover:bg-white/5 text-gray-300 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
            <Filter size={18} />
            Filter
          </button>
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border border-white/5">
            <Download size={18} />
            Export Log
          </button>
        </div>
      </div>

      <div className="glass-panel border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02] text-sm text-gray-400 uppercase tracking-wider font-semibold">
                <th className="px-6 py-5">Event ID</th>
                <th className="px-6 py-5">Action</th>
                <th className="px-6 py-5">Entity</th>
                <th className="px-6 py-5">Transaction Hash</th>
                <th className="px-6 py-5">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {activities.map((log, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-mono text-sm text-gray-500">{log.id}</div>
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      log.type === 'issue' ? 'bg-purple-500/10 text-purple-400' :
                      log.type === 'approve' ? 'bg-green-500/10 text-green-400' :
                      log.type === 'verify' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {log.type === 'issue' && <FilePlus size={14} />}
                      {log.type === 'approve' && <ShieldCheck size={14} />}
                      {log.type === 'verify' && <Activity size={14} />}
                      {log.type === 'revoke' && <ShieldAlert size={14} />}
                    </div>
                    <span className="font-medium text-gray-200">{log.action}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{log.user}</td>
                  <td className="px-6 py-4">
                    <div className="font-mono text-xs text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5 inline-block">
                      {log.hash}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{log.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
