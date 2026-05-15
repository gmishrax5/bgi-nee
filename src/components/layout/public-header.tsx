"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Docs", href: "#docs" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        background: scrolled
          ? "rgba(255, 255, 255, 0.72)"
          : "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        borderBottom: `1px solid ${scrolled ? "rgba(167,139,250,0.15)" : "rgba(167,139,250,0.08)"}`,
        boxShadow: scrolled
          ? "0 4px 30px rgba(108, 60, 225, 0.07), 0 1px 3px rgba(0,0,0,0.04)"
          : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 900,
              letterSpacing: "-0.5px",
              color: "#0f0a1e",
              fontFamily: "Inter, sans-serif",
            }}
          >
            TRUST
            <span
              style={{
                background: "linear-gradient(135deg, #6c3ce1, #9b59f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              iFY
            </span>
          </span>
        </a>

        {/* Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "100px",
            padding: "4px 6px",
            border: "1px solid rgba(167,139,250,0.1)",
          }}
          className="nav-links-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              style={{
                padding: "7px 16px",
                fontSize: "13.5px",
                fontWeight: active === link.label ? 600 : 500,
                color: active === link.label ? "#6c3ce1" : "#6b7280",
                textDecoration: "none",
                borderRadius: "100px",
                background:
                  active === link.label
                    ? "rgba(108, 60, 225, 0.08)"
                    : "transparent",
                transition: "all 0.25s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          id="nav-connect-wallet"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            background: "linear-gradient(135deg, #1a0a3d, #2d1363)",
            color: "white",
            border: "none",
            borderRadius: "100px",
            fontSize: "13.5px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow:
              "0 4px 16px rgba(26,10,61,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.transform = "translateY(-1px)";
            el.style.boxShadow =
              "0 8px 24px rgba(26,10,61,0.4), inset 0 1px 0 rgba(255,255,255,0.15)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.transform = "translateY(0)";
            el.style.boxShadow =
              "0 4px 16px rgba(26,10,61,0.3), inset 0 1px 0 rgba(255,255,255,0.1)";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="6" width="20" height="14" rx="3" stroke="white" strokeWidth="2" />
            <path d="M2 10H22" stroke="white" strokeWidth="2" />
            <circle cx="16" cy="15" r="2" fill="white" />
          </svg>
          Connect Wallet
        </button>
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}
