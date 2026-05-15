"use client";

import { Users, FileCheck, ShieldAlert, Activity, ArrowUpRight, CheckCircle, XCircle } from "lucide-react";

const stats = [
  { label: "Total Issuers", value: "124", change: "+12%", icon: Users, color: "text-blue-400", bg: "bg-blue-400/10" },
  { label: "Documents Issued", value: "8,492", change: "+34%", icon: FileCheck, color: "text-purple-400", bg: "bg-purple-400/10" },
  { type: "divider" },
  { label: "Revocations", value: "14", change: "-2%", icon: ShieldAlert, color: "text-orange-400", bg: "bg-orange-400/10" },
  { label: "Verification Checks", value: "45.2k", change: "+89%", icon: Activity, color: "text-green-400", bg: "bg-green-400/10" },
];

const recentIssuers = [
  { id: "0x7F...9b2A", name: "Stanford University", status: "Approved", date: "2 mins ago" },
  { id: "0x2A...4f1C", name: "Google Cloud Certificates", status: "Pending", date: "1 hour ago" },
  { id: "0x9C...3d8E", name: "MIT Tech Review", status: "Approved", date: "3 hours ago" },
  { id: "0x4B...1a7F", name: "Unknown Org", status: "Rejected", date: "5 hours ago" },
];

export default function AdminOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Admin Overview</h1>
        <p className="text-gray-400">System metrics and recent network activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => 
          stat.type === "divider" ? null : (
            <div key={i} className="glass-panel border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100 ${stat.bg}`} />
              
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  {stat.icon && <stat.icon size={24} />}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-md">
                  <ArrowUpRight size={14} />
                  {stat.change}
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-gray-100 mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Recent Activity Table */}
      <div className="glass-panel border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
          <h2 className="text-lg font-semibold text-gray-200">Recent Issuer Applications</h2>
          <button className="text-sm text-purple-400 hover:text-purple-300 font-medium">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-sm text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Organization Name</th>
                <th className="px-6 py-4 font-medium">Wallet Address</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Applied Date</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentIssuers.map((issuer, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-200">{issuer.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-mono text-sm text-gray-400">{issuer.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      issuer.status === 'Approved' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      issuer.status === 'Pending' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                      'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {issuer.status === 'Approved' && <CheckCircle size={12} />}
                      {issuer.status === 'Pending' && <Activity size={12} />}
                      {issuer.status === 'Rejected' && <XCircle size={12} />}
                      {issuer.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{issuer.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                      Review
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
