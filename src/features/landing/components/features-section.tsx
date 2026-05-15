"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Tamper-Proof\n& Immutable",
    desc: "Once a document is registered, it cannot be changed or tampered with. Ever.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Instant\nVerification",
    desc: "Verify any document in seconds using our drag-and-drop verification tool.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
        <line x1="12" y1="7.5" x2="5.8" y2="16.8" /><line x1="12" y1="7.5" x2="18.2" y2="16.8" /><line x1="7.5" y1="19" x2="16.5" y2="19" />
      </svg>
    ),
    title: "Decentralized\n& Trustless",
    desc: "No central authority. Powered by blockchain and smart contracts for complete trust.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
      </svg>
    ),
    title: "Multi-Sector\nApplicability",
    desc: "Built for education, legal, healthcare, government, corporate and more.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Secure\nOwnership",
    desc: "Digital signatures and ownership records ensure only rightful issuers can register.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Transparent\n& Auditable",
    desc: "Every transaction is recorded on-chain and can be publicly verified.",
  },
];

export default function FeaturesSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="features"
      ref={ref}
      className="noise-overlay"
      style={{
        background: "linear-gradient(160deg, #fdfbff 0%, #f5f0ff 50%, #ede5ff 100%)",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative ring */}
      <div style={{
        position: "absolute", top: "8%", right: "3%",
        width: "160px", height: "160px",
        border: "1.5px solid rgba(167,139,250,0.18)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "12%", right: "6%",
        width: "90px", height: "90px",
        border: "1.5px solid rgba(167,139,250,0.12)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em",
            color: "#6c3ce1", textTransform: "uppercase", marginBottom: "14px",
          }}>
            WHY CHOOSE TRUSTIFY
          </p>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900,
            letterSpacing: "-2px", color: "#0f0a1e", marginBottom: "14px", lineHeight: 1.08,
          }}>
            Why Choose <span className="gradient-text">Trustify?</span>
          </h2>
          <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: 1.75, maxWidth: "440px", margin: "0 auto" }}>
            A decentralized approach to document authenticity that is secure, fast and future-ready.
          </p>
        </div>

        <div
          className="stagger-children"
          style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }}
          id="feat-row"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal glass"
              style={{
                "--i": i,
                borderRadius: "20px",
                padding: "28px 14px 24px",
                textAlign: "center",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 20px 48px rgba(108,60,225,0.14)";
                el.style.borderColor = "rgba(108,60,225,0.28)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "";
                el.style.borderColor = "";
              }}
            >
              <div style={{
                width: "70px", height: "70px", margin: "0 auto 16px",
                background: "linear-gradient(135deg, rgba(108,60,225,0.06), rgba(167,139,250,0.1))",
                borderRadius: "18px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontSize: "14px", fontWeight: 800, color: "#0f0a1e",
                marginBottom: "10px", lineHeight: 1.35, whiteSpace: "pre-line",
                letterSpacing: "-0.2px",
              }}>
                {f.title}
              </h3>
              <div style={{
                width: "26px", height: "2.5px",
                background: "linear-gradient(90deg, #6c3ce1, #a78bfa)",
                borderRadius: "2px", margin: "0 auto 12px",
              }} />
              <p style={{ fontSize: "12.5px", color: "#6b7280", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1100px){ #feat-row{ grid-template-columns:repeat(3,1fr) !important; } }
        @media(max-width:700px){ #feat-row{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:480px){ #feat-row{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
