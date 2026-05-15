"use client";

import { Bell, Search, Wallet } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="h-20 glass-panel border-b border-white/10 sticky top-0 z-10 flex items-center justify-between px-8">
      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-black/20 border border-white/5 rounded-xl px-4 py-2 w-96 backdrop-blur-md">
        <Search size={18} className="text-gray-400" />
        <input 
          type="text" 
          placeholder="Search documents, issuers..." 
          className="bg-transparent border-none outline-none text-sm text-gray-200 placeholder-gray-500 w-full"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
          <Bell size={20} />
        </button>
        
        {/* Placeholder Wallet Connect Button */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          <Wallet size={18} />
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
