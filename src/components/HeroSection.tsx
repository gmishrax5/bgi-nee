"use client";

import Image from "next/image";

const tags = ["DECENTRALIZED", "IMMUTABLE", "TRUSTED"];

const badges = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="8" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </svg>
    ),
    label: "Decentralized",
    sub: "No single point of failure",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="2">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 118 0v4" strokeLinecap="round" />
      </svg>
    ),
    label: "Immutable",
    sub: "Records can't be altered",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c3ce1" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: "Transparent",
    sub: "Verifiable by anyone",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="noise-overlay"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(155deg, #fdfcff 0%, #f4edff 35%, #ede0ff 65%, #e8d6ff 100%)",
        paddingTop: "68px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial orbs */}
      <div
        style={{
          position: "absolute", top: "-120px", right: "-80px",
          width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 60%)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "-150px", left: "-100px",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 60%)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />
      {/* Grid dots */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(108,60,225,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div
        style={{
          maxWidth: "1280px", margin: "0 auto", padding: "48px 32px 80px",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "48px", alignItems: "center",
          minHeight: "calc(100vh - 68px)",
          position: "relative", zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* LEFT */}
        <div style={{ opacity: 0, animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s forwards" }}>
          {/* Tags pill */}
          <div
            className="glass"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              borderRadius: "100px", padding: "8px 20px", marginBottom: "28px",
            }}
          >
            {tags.map((t, i) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#6c3ce1" }}>{t}</span>
                {i < tags.length - 1 && (
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#a78bfa" }} />
                )}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 5.5vw, 72px)", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: "-3px", color: "#0f0a1e",
              marginBottom: "22px",
            }}
          >
            Authenticate.
            <br />
            Verify.{" "}
            <span className="gradient-text" style={{ letterSpacing: "-3px" }}>
              Trust.
            </span>
          </h1>

          <p
            style={{
              fontSize: "16px", color: "#6b7280", lineHeight: 1.8,
              maxWidth: "420px", marginBottom: "36px",
            }}
          >
            Trustify is a decentralized Web3 platform that secures your documents with blockchain technology, ensuring authenticity, transparency, and trust across every industry.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "44px" }}>
            <button
              id="hero-verify-btn"
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "14px 28px",
                background: "linear-gradient(135deg, #5c21d4, #7c3aed)",
                color: "white", border: "none", borderRadius: "14px",
                fontSize: "14.5px", fontWeight: 700, cursor: "pointer",
                boxShadow: "0 8px 28px rgba(92,33,212,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 16px 40px rgba(92,33,212,0.45), inset 0 1px 0 rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 8px 28px rgba(92,33,212,0.35), inset 0 1px 0 rgba(255,255,255,0.15)";
              }}
            >
              Verify a Document
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              id="hero-register-btn"
              className="glass"
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "14px 28px",
                color: "#1a0a3d", borderRadius: "14px",
                fontSize: "14.5px", fontWeight: 700, cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 12px 32px rgba(108,60,225,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "";
              }}
            >
              Register Document
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="#1a0a3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Badge row */}
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {badges.map((b) => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  className="glass"
                  style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#111827" }}>{b.label}</div>
                  <div style={{ fontSize: "10.5px", color: "#9ca3af" }}>{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – visual */}
        <div
          style={{
            position: "relative", display: "flex",
            alignItems: "center", justifyContent: "center",
            opacity: 0, animation: "scaleUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards",
          }}
        >
          {/* Floating cubes
          {[
            { t: "20px", l: "30px", s: 28, d: "0s", r: 15 },
            { t: "80px", ri: "10px", s: 20, d: "0.8s", r: -10 },
            { b: "130px", l: "10px", s: 22, d: "0.3s", r: 25 },
            { b: "40px", ri: "60px", s: 14, d: "1.2s", r: -18 },
          ].map((c, i) => (
            <div
              key={i}
              className="animate-float-slow"
              style={{
                position: "absolute",
                top: c.t, bottom: c.b, left: c.l, right: c.ri,
                width: c.s, height: c.s,
                background: "linear-gradient(135deg, #6c3ce1, #a78bfa)",
                borderRadius: "7px",
                boxShadow: "0 8px 24px rgba(108,60,225,0.35)",
                transform: `rotate(${c.r}deg)`,
                animationDelay: c.d,
              }}
            />
          ))} */}

          {/* Main hero image */}
          <div className="animate-glow  " style={{ position: "relative", width: "100%", maxWidth: "490px" }}>
            <Image
              src="/hero-document.png"
              
              alt="Blockchain Document Verification"
              width={490}
              height={490}
              style={{
                // animation: "pulse-ring 2s  infinite",
                animation: 'glow 2s ease-in-out infinite',

                width: "100%", height: "55%", objectFit: "contain",
                filter: "drop-shadow(0 32px 64px rgba(108,60,225,0.22))",
              }}
              priority
            />

    

          

            {/* Lock badge with pulse ring */}
            {/* <div
              style={{
                position: "absolute", bottom: "20px", right: "80px",
                width: "44px", height: "44px",
              }}
            >
              <div
                style={{
                  position: "absolute", inset: "-6px",
                  border: "2px solid rgba(108,60,225,0.2)",
                  borderRadius: "50%",
                  animation: "pulse-ring 2s ease-out infinite",
                }}
              />
              <div
                className="glass"
                style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="11" width="14" height="10" rx="2" fill="#6c3ce1" />
                  <path d="M8 11V7a4 4 0 018 0v4" stroke="#6c3ce1" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .hero-grid { grid-template-columns:1fr !important; text-align:center; }
        }
      `}</style>
    </section>
  );
}
