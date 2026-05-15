"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Activity, Settings, FilePlus, FileText, FileWarning, CheckCircle } from "lucide-react";

const links = [
  { group: "Admin", items: [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Manage Issuers", href: "/admin/issuers", icon: Users },
    { name: "Activity Log", href: "/admin/activity", icon: Activity },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]},
  { group: "Issuer", items: [
    { name: "Dashboard", href: "/issuer", icon: LayoutDashboard },
    { name: "Register Document", href: "/issuer/register", icon: FilePlus },
    { name: "My Documents", href: "/issuer/documents", icon: FileText },
    { name: "Revoke Document", href: "/issuer/revoke", icon: FileWarning },
  ]},
  { group: "Verifier", items: [
    { name: "Workspace", href: "/verifier", icon: CheckCircle },
  ]}
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 glass-panel border-r border-white/10 h-screen sticky top-0 flex flex-col p-4 z-20 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-32 bg-purple-500/10 blur-[50px] -z-10" />

      <div className="mb-8 px-4 flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-400 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
            T
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 font-syncopate tracking-wider">
            TRUSTIFY
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide">
        {links.map((group) => (
          <div key={group.group}>
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {group.group}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-purple-500/15 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]" 
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-purple-400" : "text-gray-500"} />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
