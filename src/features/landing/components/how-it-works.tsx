"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Upload Document",
    desc: "Upload your document securely through our Web3 portal.",
  },
  {
    num: "02",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C9.79 2 7.79 2.84 6.28 4.22" /><path d="M12 22c4.97 0 9-4.03 9-9 0-2.21-.89-4.21-2.34-5.66" />
        <path d="M6 13c0-3.31 2.69-6 6-6 1.66 0 3.16.67 4.24 1.76" /><path d="M12 12v1" /><path d="M9 13c0 1.66 1.34 3 3 3" />
      </svg>
    ),
    title: "Hash & Register",
    desc: "We generate a unique hash of your document and store it on the blockchain.",
  },
  {
    num: "03",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Instant Verification",
    desc: "Anyone can verify authenticity in seconds using our drag-and-drop tool.",
  },
  {
    num: "04",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" /><path d="M12 2v18" /><path d="M4 6.5l8 4.5 8-4.5" />
      </svg>
    ),
    title: "Tamper-Proof & Trusted",
    desc: "Your document is secure, immutable and globally verifiable.",
  },
];

export default function HowItWorksSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{
        background: "linear-gradient(160deg, #fdfbff 0%, #f5f0ff 40%, #ece3ff 100%)",
        padding: "100px 32px 110px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div style={{
        position: "absolute", bottom: "8%", left: "3%",
        width: "180px", height: "180px",
        border: "1.5px solid rgba(167,139,250,0.18)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em",
            color: "#6c3ce1", textTransform: "uppercase", marginBottom: "14px",
          }}>
            HOW IT WORKS
          </p>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900,
            letterSpacing: "-2px", color: "#0f0a1e", lineHeight: 1.08,
          }}>
            How It <span className="gradient-text" style={{ fontStyle: "italic" }}>Works</span>
          </h2>
          <p style={{ color: "#6b7280", fontSize: "15px", marginTop: "12px" }}>
            A simple 4-step process to register and verify any document.
          </p>
        </div>

        <div
          className="stagger-children"
          style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0", position: "relative", alignItems: "start",
          }}
          id="steps-row"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                "--i": i,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              } as React.CSSProperties}
            >
              {/* Number pill + connector */}
              <div style={{
                display: "flex", alignItems: "center", width: "100%",
                marginBottom: "24px", position: "relative",
              }}>
                <div
                  style={{
                    flexShrink: 0, margin: "0 auto",
                    background: "linear-gradient(135deg, #1a0a3d, #2d1363)",
                    borderRadius: "100px", padding: "6px 16px",
                    fontSize: "13px", fontWeight: 800, color: "white",
                    boxShadow: "0 4px 16px rgba(26,10,61,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                    position: "relative", zIndex: 2,
                  }}
                >
                  {step.num}
                </div>

                {i < steps.length - 1 && (
                  <div style={{
                    position: "absolute",
                    left: "calc(50% + 32px)",
                    right: "calc(-50% + 32px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex", alignItems: "center",
                    pointerEvents: "none", zIndex: 1,
                  }}>
                    <div style={{
                      flex: 1,
                      borderTop: "2px dashed rgba(108,60,225,0.3)",
                    }} />
                    <div style={{
                      width: 0, height: 0,
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "7px solid rgba(108,60,225,0.45)",
                      marginLeft: "-1px",
                    }} />
                  </div>
                )}
              </div>

              {/* Icon circle with glow */}
              <div style={{
                position: "relative",
                width: "84px", height: "84px",
                marginBottom: "22px",
              }}>
                <div style={{
                  position: "absolute", inset: "-8px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(92,33,212,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />
                <div style={{
                  width: "84px", height: "84px",
                  background: "linear-gradient(135deg, #5c21d4, #9b59f5)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 12px 36px rgba(92,33,212,0.35), inset 0 -2px 0 rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}>
                  {step.icon}
                </div>
              </div>

              <h3 style={{
                fontSize: "16px", fontWeight: 800, color: "#0f0a1e",
                marginBottom: "10px", textAlign: "center", letterSpacing: "-0.3px",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: "13px", color: "#6b7280", lineHeight: 1.7,
                textAlign: "center", maxWidth: "190px",
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ #steps-row{ grid-template-columns:repeat(2,1fr) !important; gap:48px !important; } }
        @media(max-width:500px){ #steps-row{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
