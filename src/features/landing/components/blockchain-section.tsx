"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const techCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "SHA-256 Hashing",
    desc: "Industry-standard cryptographic hashing ensures unique, tamper-proof document fingerprints.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" /><path d="M12 2v18" /><path d="M4 6.5l8 4.5 8-4.5" />
      </svg>
    ),
    title: "Smart Contracts",
    desc: "Automated verification logic deployed on-chain. No intermediaries needed.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
        <line x1="12" y1="7.5" x2="5.8" y2="16.8" /><line x1="12" y1="7.5" x2="18.2" y2="16.8" /><line x1="7.5" y1="19" x2="16.5" y2="19" />
      </svg>
    ),
    title: "Decentralized Storage",
    desc: "Documents and hashes stored across a distributed network with IPFS integration.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="3" /><path d="M2 10H22" /><circle cx="16" cy="15" r="2" />
      </svg>
    ),
    title: "Wallet Integration",
    desc: "Connect MetaMask, WalletConnect or any Web3 wallet to sign and verify documents.",
  },
];

export default function BlockchainSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="docs"
      ref={ref}
      style={{
        background: "linear-gradient(160deg, #0d0618 0%, #1a0a3d 50%, #180835 100%)",
        padding: "110px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated grid */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 75%)",
        }}
      />

      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(108,60,225,0.12) 0%, transparent 60%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "7px 18px", borderRadius: "100px", marginBottom: "20px",
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.15)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" /><path d="M12 2v18" /><path d="M4 6.5l8 4.5 8-4.5" />
            </svg>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#c4b5fd" }}>
              BLOCKCHAIN TECHNOLOGY
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900,
            letterSpacing: "-2px", color: "white", lineHeight: 1.08,
          }}>
            Powered by{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #a78bfa, #c084fc, #e9d5ff)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              Blockchain
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", marginTop: "14px", maxWidth: "500px", margin: "14px auto 0" }}>
            Built on battle-tested blockchain infrastructure for maximum security and transparency.
          </p>
        </div>

        <div
          className="stagger-children"
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "18px" }}
          id="bc-grid"
        >
          {techCards.map((card, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                "--i": i,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(167,139,250,0.1)",
                borderRadius: "20px",
                padding: "28px 26px",
                backdropFilter: "blur(12px)",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.borderColor = "rgba(167,139,250,0.22)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 48px rgba(108,60,225,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(167,139,250,0.1)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "52px", height: "52px",
                background: "linear-gradient(135deg, rgba(108,60,225,0.15), rgba(167,139,250,0.08))",
                borderRadius: "14px",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
                border: "1px solid rgba(167,139,250,0.12)",
              }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "white", marginBottom: "8px", letterSpacing: "-0.3px" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:700px){ #bc-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
