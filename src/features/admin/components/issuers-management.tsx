"use client";

import { CheckCircle, XCircle, Search, ShieldCheck, Clock, FileWarning } from "lucide-react";

const applications = [
  { id: "APP-001", name: "MIT Technology Review", type: "Media", status: "Pending", applied: "2025-05-14", documents: 0 },
  { id: "APP-002", name: "Harvard Law School", type: "Education", status: "Pending", applied: "2025-05-12", documents: 0 },
];

const approvedIssuers = [
  { id: "0x7F...9b2A", name: "Stanford University", type: "Education", status: "Active", joined: "2024-11-20", documents: 84 },
  { id: "0x3C...8f1D", name: "Google Cloud", type: "Enterprise", status: "Active", joined: "2025-01-05", documents: 1420 },
  { id: "0x9A...2e4B", name: "State of California", type: "Government", status: "Suspended", joined: "2024-08-14", documents: 56 },
];

export default function IssuersManagement() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Manage Issuers</h1>
          <p className="text-gray-400">Review new applications and manage existing approved issuers.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search issuers..." 
            className="w-64 bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-gray-200 outline-none focus:border-purple-500/50 transition-colors" 
          />
        </div>
      </div>

      {/* Pending Applications */}
      <div>
        <h2 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
          <Clock size={20} className="text-orange-400" />
          Pending Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {applications.map((app, i) => (
            <div key={i} className="glass-panel border border-orange-500/20 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] -mr-10 -mt-10" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-200">{app.name}</h3>
                  <p className="text-sm text-gray-500">{app.type} • Applied {app.applied}</p>
                </div>
                <div className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold border border-orange-500/20">
                  Needs Review
                </div>
              </div>
              <div className="flex gap-3 relative z-10">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-2 rounded-xl text-sm font-semibold transition-all">
                  <CheckCircle size={16} /> Approve
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 py-2 rounded-xl text-sm font-semibold transition-all border border-red-500/20">
                  <XCircle size={16} /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Approved Issuers Table */}
      <div className="glass-panel border border-white/10 rounded-2xl overflow-hidden mt-8">
        <div className="px-6 py-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
          <h2 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
            <ShieldCheck size={20} className="text-green-400" />
            Active Network Issuers
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-sm text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Organization</th>
                <th className="px-6 py-4 font-medium">Wallet Address</th>
                <th className="px-6 py-4 font-medium">Documents</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {approvedIssuers.map((issuer, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-200">{issuer.name}</div>
                    <div className="text-xs text-gray-500">{issuer.type}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-mono text-sm text-gray-400">{issuer.id}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{issuer.documents.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      issuer.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {issuer.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 ml-auto">
                      <FileWarning size={14} /> Revoke Access
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
