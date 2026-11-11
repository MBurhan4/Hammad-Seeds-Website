"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Seeds",    href: "#seeds" },
  { label: "Products", href: "#products" },
  { label: "Why Us",   href: "#whyus" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      background: scrolled
        ? "rgba(10,31,14,0.97)"
        : "linear-gradient(90deg,#061209,#133320,#061209)",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      position: "sticky", top: 0, zIndex: 100,
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div className="gold-line" />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    height: 72 }}>

        {/* Brand */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          {/* Logo */}
          <div style={{ borderRadius: "50%", overflow: "hidden", flexShrink: 0,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}>
            <Logo size={46} />
          </div>
          <div>
            <div className="urdu" style={{
                color: "#fff", fontSize: "1.3rem", fontWeight: 700,
                lineHeight: 1.8, display: "block",
                whiteSpace: "nowrap",
                paddingBottom: "0.15rem",
              }}>
              حماد سیڈز
            </div>
            <div style={{ color: "#c9960c", fontSize: "0.58rem", letterSpacing: "2.5px",
                          fontWeight: 700, textTransform: "uppercase" }}>
              Hammad Seeds
            </div>
          </div>
        </a>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href}
               style={{ color: "#c8e6d0", fontSize: "0.86rem", fontWeight: 500,
                        padding: "0.4rem 0.9rem", borderRadius: 8, textDecoration: "none",
                        transition: "all 0.2s" }}
               onMouseEnter={e => {
                 const el = e.currentTarget as HTMLElement;
                 el.style.color = "#fff"; el.style.background = "rgba(255,255,255,0.1)";
               }}
               onMouseLeave={e => {
                 const el = e.currentTarget as HTMLElement;
                 el.style.color = "#c8e6d0"; el.style.background = "transparent";
               }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold" style={{ marginLeft: 10, padding: "0.5rem 1.3rem", fontSize: "0.84rem" }}>
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden"
                style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 6 }}>
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0a1f0e", borderTop: "1px solid rgba(201,150,12,0.2)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               style={{ display: "block", padding: "0.9rem 1.5rem", color: "#c8e6d0",
                        textDecoration: "none", fontSize: "0.95rem",
                        borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <div style={{ height: 1.5, background: "linear-gradient(90deg,transparent,rgba(201,150,12,0.4),transparent)" }} />
    </nav>
  );
}
