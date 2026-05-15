"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const industries = [
  { emoji: "🎓", title: "Education", desc: "Verify degrees, transcripts and certificates issued by universities and schools." },
  { emoji: "⚖️", title: "Legal", desc: "Authenticate contracts, certificates and legal agreements with ease." },
  { emoji: "🏥", title: "Healthcare", desc: "Secure patient records, prescriptions and medical certificates on-chain." },
  { emoji: "🏛️", title: "Government", desc: "Issue and verify IDs for documents, NGOs, registered bodies and official records." },
  { emoji: "💼", title: "Corporate", desc: "Verify employee credentials, NDAs, compliance and more." },
  { emoji: "👥", title: "Recruitment", desc: "Prevent fake degrees and fraud hiring with candidate verification." },
];

export default function UseCasesSection() {
  const ref = useScrollReveal();

  return (
    <section id="use-cases" ref={ref} style={{ background: "#faf9ff", padding: "100px 32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{
            fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#0f0a1e", marginBottom: "10px", lineHeight: 1.08,
          }}>
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
          <p style={{ color: "#6b7280", fontSize: "15px" }}>Trustify adapts to your world.</p>
        </div>

        <div
          className="stagger-children"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}
          id="ind-grid"
        >
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className="reveal glass"
              style={{
                "--i": i,
                borderRadius: "22px",
                padding: "32px 24px",
                textAlign: "center",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 24px 56px rgba(108,60,225,0.14)";
                el.style.borderColor = "rgba(108,60,225,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "";
                el.style.borderColor = "";
              }}
            >
              {/* Subtle gradient orb on hover */}
              <div style={{
                position: "absolute", top: "-40px", right: "-40px",
                width: "120px", height: "120px",
                background: "radial-gradient(circle, rgba(108,60,225,0.06) 0%, transparent 70%)",
                borderRadius: "50%", pointerEvents: "none",
              }} />

              <div style={{
                width: "72px", height: "72px", margin: "0 auto 20px",
                background: "linear-gradient(135deg, rgba(108,60,225,0.06), rgba(167,139,250,0.1))",
                borderRadius: "20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "34px",
                boxShadow: "0 6px 20px rgba(108,60,225,0.08)",
              }}>
                {ind.emoji}
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#0f0a1e", marginBottom: "8px", letterSpacing: "-0.3px" }}>
                {ind.title}
              </h3>
              <p style={{ fontSize: "13.5px", color: "#6b7280", lineHeight: 1.7 }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ #ind-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:500px){ #ind-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
