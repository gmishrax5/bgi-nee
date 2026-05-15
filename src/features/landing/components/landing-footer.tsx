"use client";

const footerCols = {
  Product: ["Features", "How It Works", "Use Cases", "Pricing"],
  Resources: ["Documentation", "Smart Contracts", "API Reference", "Blog"],
  Company: ["About Us", "Careers", "Contact", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(180deg, #0d0618 0%, #080410 100%)",
      padding: "72px 32px 32px",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px", marginBottom: "56px",
          }}
          id="footer-grid"
        >
          {/* Brand */}
          <div>
            <span style={{
              fontSize: "22px", fontWeight: 900, letterSpacing: "-0.5px", color: "white",
            }}>
              TRUST
              <span style={{
                background: "linear-gradient(135deg, #a78bfa, #c084fc)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>iFY</span>
            </span>
            <p style={{
              color: "rgba(255,255,255,0.4)", fontSize: "13.5px", lineHeight: 1.75,
              maxWidth: "240px", margin: "16px 0 24px",
            }}>
              A decentralized Web3 document authentication platform for a more trusted digital world.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["X", "G", "D", "In"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: "36px", height: "36px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(108,60,225,0.2)";
                    el.style.borderColor = "rgba(167,139,250,0.3)";
                    el.style.color = "#c4b5fd";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.45)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerCols).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{
                fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px",
              }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.38)", fontSize: "13.5px",
                        textDecoration: "none", transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "#c4b5fd"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "18px", padding: "26px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "24px", marginBottom: "44px", flexWrap: "wrap",
          backdropFilter: "blur(12px)",
        }}>
          <div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "4px" }}>Newsletter</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)" }}>
              Subscribe for the latest updates and insights.
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              id="newsletter-input"
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "11px 18px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px", color: "white", fontSize: "13px",
                outline: "none", width: "230px",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            />
            <button
              id="newsletter-btn"
              style={{
                padding: "11px 20px",
                background: "linear-gradient(135deg, #5c21d4, #7c3aed)",
                color: "white", border: "none", borderRadius: "12px",
                fontSize: "13px", fontWeight: 700, cursor: "pointer",
                boxShadow: "0 4px 16px rgba(92,33,212,0.4)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(0)";
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "28px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "12.5px" }}>
            © {new Date().getFullYear()} Trustify, Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 10px rgba(34,197,94,0.5)",
            }} />
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12.5px" }}>All systems operational</span>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ #footer-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:500px){ #footer-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </footer>
  );
}
