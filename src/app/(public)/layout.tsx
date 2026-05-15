import React from 'react';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#faf9ff]">
      {children}
    </div>
  );
}
