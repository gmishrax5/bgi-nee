"use client";

import { FileText, Search, Download, ExternalLink } from "lucide-react";

const myDocs = [
  { id: "CERT-2025-001", name: "Degree_CS_2025.pdf", hash: "0x8f43...b71c", date: "May 14, 2025", status: "Active" },
  { id: "CERT-2025-002", name: "Degree_Math_2025.pdf", hash: "0x1a2b...9d3e", date: "May 14, 2025", status: "Active" },
  { id: "CERT-2024-089", name: "Transcript_JaneDoe.pdf", hash: "0x5c6d...2f1a", date: "May 12, 2024", status: "Revoked" },
  { id: "CERT-2024-088", name: "Transcript_JohnSmith.pdf", hash: "0x99dd...e11b", date: "May 12, 2024", status: "Active" },
  { id: "CERT-2023-442", name: "Degree_Physics_2023.pdf", hash: "0x221a...884c", date: "June 01, 2023", status: "Active" },
];

export default function DocumentsList() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-2">My Documents</h1>
          <p className="text-gray-400">View and manage all documents you have issued on the blockchain.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by ID or Hash..." 
              className="w-64 bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-gray-200 outline-none focus:border-purple-500/50 transition-colors" 
            />
          </div>
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border border-white/5">
            <Download size={18} />
            Export CSV
          </button>
        </div>
      </div>

      <div className="glass-panel border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02] text-sm text-gray-400 uppercase tracking-wider font-semibold">
                <th className="px-6 py-5">Reference ID</th>
                <th className="px-6 py-5">File Name</th>
                <th className="px-6 py-5">Blockchain Hash</th>
                <th className="px-6 py-5">Issue Date</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Explorer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {myDocs.map((doc, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-200">{doc.id}</div>
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-purple-400">
                      <FileText size={16} />
                    </div>
                    <span className="text-sm text-gray-300">{doc.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-mono text-sm text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5 inline-block">
                      {doc.hash}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{doc.date}</td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      doc.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {doc.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-500 hover:text-purple-400 transition-colors inline-flex">
                      <ExternalLink size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
