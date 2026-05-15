"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #1a0a3d 0%, #2d1363 50%, #3b1a7a 100%)",
        padding: "90px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />
      {/* Glow */}
      <div style={{
        position: "absolute", right: "10%", top: "50%", transform: "translateY(-50%)",
        width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 60%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="reveal" style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid", gridTemplateColumns: "1fr auto",
            alignItems: "center", gap: "48px",
          }}
          id="cta-grid"
        >
          <div>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900,
              letterSpacing: "-1.5px", color: "white", lineHeight: 1.12, marginBottom: "14px",
            }}>
              Ready to secure your documents with blockchain technology?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7 }}>
              Join Trustify and build a future of trust and transparency.
            </p>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", marginTop: "10px" }}>
              No credit card required · Free tier available
            </p>
          </div>

          <button
            id="cta-get-started"
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "16px 34px",
              background: "linear-gradient(135deg, #5c21d4, #7c3aed)",
              color: "white", border: "none", borderRadius: "16px",
              fontSize: "15px", fontWeight: 700, cursor: "pointer",
              boxShadow: "0 8px 32px rgba(92,33,212,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
              whiteSpace: "nowrap",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 16px 44px rgba(92,33,212,0.6), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 32px rgba(92,33,212,0.5), inset 0 1px 0 rgba(255,255,255,0.15)";
            }}
          >
            Get Started Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:700px){ #cta-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
