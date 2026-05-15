import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trustify — Authenticate. Documents. Build Digital Trust.",
  description:
    "Trustify is a decentralized platform for secure document registration and verification using blockchain technology. Immutable, transparent, and trusted.",
  keywords: ["blockchain", "document verification", "decentralized", "document authentication", "NFT documents"],
  openGraph: {
    title: "Trustify — Blockchain Document Authentication",
    description: "Secure document registration and verification powered by blockchain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
