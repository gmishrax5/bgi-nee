"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const logos = ["Google", "Microsoft", "Deloitte.", "Stanford", "IBM", "TATA", "accenture", "Infosys"];

export default function TrustedBySection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        background: "white",
        padding: "44px 0",
        borderTop: "1px solid rgba(167,139,250,0.1)",
        borderBottom: "1px solid rgba(167,139,250,0.1)",
        overflow: "hidden",
      }}
    >
      <p
        className="reveal"
        style={{
          textAlign: "center",
          fontSize: "10.5px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "#9ca3af",
          textTransform: "uppercase",
          marginBottom: "28px",
        }}
      >
        TRUSTED BY ORGANIZATIONS WORLDWIDE
      </p>

      {/* Infinite marquee */}
      <div style={{ position: "relative" }}>
        {/* Fade masks */}
        <div
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
            background: "linear-gradient(90deg, white, transparent)",
            zIndex: 2, pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
            background: "linear-gradient(270deg, white, transparent)",
            zIndex: 2, pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            animation: "marquee 25s linear infinite",
            width: "fit-content",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              style={{
                flexShrink: 0,
                padding: "0 40px",
                fontSize: logo === "IBM" ? "24px" : "18px",
                fontWeight: logo === "Deloitte." ? 400 : logo === "accenture" ? 500 : 700,
                fontStyle: logo === "Infosys" ? "italic" : "normal",
                color: "#374151",
                opacity: 0.38,
                letterSpacing: logo === "IBM" ? "0.1em" : "normal",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
