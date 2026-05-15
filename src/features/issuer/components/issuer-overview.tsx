"use client";

import { FileCheck, ShieldAlert, History, Plus } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Active Documents", value: "84", icon: FileCheck, color: "text-green-400", bg: "bg-green-400/10" },
  { label: "Revoked Documents", value: "3", icon: ShieldAlert, color: "text-red-400", bg: "bg-red-400/10" },
  { label: "Total Issuance", value: "87", icon: History, color: "text-purple-400", bg: "bg-purple-400/10" },
];

const recentDocs = [
  { id: "CERT-2025-001", hash: "0x8f43...b71c", date: "Today, 10:42 AM", status: "Active" },
  { id: "CERT-2025-002", hash: "0x1a2b...9d3e", date: "Yesterday", status: "Active" },
  { id: "CERT-2024-089", hash: "0x5c6d...2f1a", date: "May 12, 2024", status: "Revoked" },
];

export default function IssuerOverview() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Issuer Dashboard</h1>
          <p className="text-gray-400">Welcome back, Stanford University. Manage your blockchain credentials.</p>
        </div>
        <Link 
          href="/issuer/register"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        >
          <Plus size={18} />
          Issue Document
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-panel border border-white/10 rounded-2xl p-6 flex items-center gap-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-100 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Documents Table */}
      <div className="glass-panel border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
          <h2 className="text-lg font-semibold text-gray-200">Recently Issued Documents</h2>
          <Link href="/issuer/documents" className="text-sm text-purple-400 hover:text-purple-300 font-medium">View All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-sm text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Reference ID</th>
                <th className="px-6 py-4 font-medium">Document Hash</th>
                <th className="px-6 py-4 font-medium">Issue Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentDocs.map((doc, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-200">{doc.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-mono text-sm text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5 inline-block">{doc.hash}</div>
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
                    <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                      View Details
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
