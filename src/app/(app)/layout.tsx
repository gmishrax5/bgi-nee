import React from 'react';
import AppSidebar from '@/components/layout/app-sidebar';
import AppHeader from '@/components/layout/app-header';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#050505] text-gray-100 overflow-hidden font-outfit relative">
      {/* Global Background Noise for Authenticated App */}
      <div className="fixed inset-0 z-[-1] opacity-30 mix-blend-overlay pointer-events-none bg-[url('/noise.png')]" />

      <AppSidebar />
      <main className="flex-1 flex flex-col h-screen overflow-y-auto scrollbar-hide relative z-0">
        <AppHeader />
        <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
