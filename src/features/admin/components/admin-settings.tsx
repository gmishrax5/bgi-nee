"use client";

import { Save, Shield, Key, Bell, Database } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Platform Settings</h1>
        <p className="text-gray-400">Manage global protocol configurations and smart contract parameters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Settings Navigation Sidebar */}
        <div className="col-span-1 space-y-2">
          {[
            { id: "general", label: "General", icon: Shield, active: true },
            { id: "security", label: "Security & Keys", icon: Key, active: false },
            { id: "network", label: "Network & Nodes", icon: Database, active: false },
            { id: "notifications", label: "Notifications", icon: Bell, active: false },
          ].map((item) => (
            <button 
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" 
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
              }`}
            >
              <item.icon size={18} className={item.active ? "text-purple-400" : "text-gray-500"} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="col-span-3 space-y-6">
          <div className="glass-panel border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-200 mb-6">General Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Protocol Name</label>
                <input 
                  type="text" 
                  defaultValue="TRUSTIFY Network"
                  className="w-full max-w-md bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 outline-none focus:border-purple-500/50 transition-colors" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Admin Wallet Address</label>
                <input 
                  type="text" 
                  disabled
                  defaultValue="0x1234abcd5678efgh9012ijkl3456mnop7890qrst"
                  className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-500 cursor-not-allowed outline-none" 
                />
                <p className="text-xs text-gray-500 mt-2">Cannot be changed here. Requires a multisig transaction.</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="block bg-purple-600 w-12 h-6 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-6"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    Auto-Approve Known Institutional Domains (e.g. .edu, .gov)
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="glass-panel border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-200 mb-6">Smart Contract Parameters</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Issuance Fee (ETH)</label>
                <input 
                  type="number" 
                  defaultValue={0.002}
                  step={0.001}
                  className="w-full max-w-xs bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 outline-none focus:border-purple-500/50 transition-colors" 
                />
              </div>

              <div className="pt-4 border-t border-white/10">
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
