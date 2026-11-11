"use client";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "#040e07" }}>
      <div className="gold-line" />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "2.5rem" }}
             className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.2rem" }}>
          {/* Logo — SVG is self-contained with green circle */}
          <div style={{ borderRadius: "50%", overflow: "hidden", flexShrink: 0,
                         boxShadow: "0 0 0 2.5px #c9960c, 0 4px 16px rgba(0,0,0,0.5)" }}>
                <Logo size={48} />
              </div>
              <div>
                <div className="urdu" style={{
                color: "#fff", fontSize: "1.3rem", fontWeight: 700,
                lineHeight: 1.8, whiteSpace: "nowrap",
                paddingBottom: "0.15rem",
              }}>
                  حماد سیڈز
                </div>
                <div style={{ color: "#c9960c", fontSize: "0.58rem", letterSpacing: "2px",
                               textTransform: "uppercase" }}>
                  Hammad Seeds
                </div>
              </div>
            </div>
            <p style={{ color: "#4a7a5a", fontSize: "0.86rem", lineHeight: 1.8, maxWidth: 280, marginBottom: "1.2rem" }}>
              Hammad & Company — Your trusted partner for local and imported seeds for all vegetables and crops in Pakistan.
            </p>
            <div style={{ color: "#4a7a5a", fontSize: "0.82rem", lineHeight: 2 }}>
              <div>📍 62 Gulistan Road, Sahiwal</div>
              <div>📞 <a href="tel:03006908055" style={{ color: "#c9960c", textDecoration: "none" }}>0300-6908055</a></div>
              <div>📧 <a href="mailto:hammadandcompany123@gmail.com" style={{ color: "#c9960c", textDecoration: "none", fontSize: "0.78rem" }}>hammadandcompany123@gmail.com</a></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "0.9rem", marginBottom: "1.2rem",
                          borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "0.6rem" }}>
              Quick Links
            </h4>
            {[["Home","#home"],["About Us","#about"],["Seed Categories","#seeds"],
              ["Products","#products"],["Why Us","#whyus"],["Gallery","#gallery"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h}
                 style={{ display: "block", color: "#4a7a5a", fontSize: "0.84rem",
                           textDecoration: "none", padding: "0.3rem 0", transition: "color .2s" }}
                 onMouseEnter={e => (e.currentTarget.style.color = "#c9960c")}
                 onMouseLeave={e => (e.currentTarget.style.color = "#4a7a5a")}>
                → {l}
              </a>
            ))}
          </div>

          {/* Seeds */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "0.9rem", marginBottom: "1.2rem",
                          borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "0.6rem" }}>
              Our Seeds
            </h4>
            {["Wheat Seed","Paddy / Rice Seed","Baseem Fodder","Tomato Seeds","Onion Seeds",
              "Potato Seeds","Maize Seeds","Chilli Seeds","Capsicum Seeds"].map(s => (
              <a key={s} href="#products"
                 style={{ display: "block", color: "#4a7a5a", fontSize: "0.82rem",
                           textDecoration: "none", padding: "0.28rem 0", transition: "color .2s" }}
                 onMouseEnter={e => (e.currentTarget.style.color = "#c9960c")}
                 onMouseLeave={e => (e.currentTarget.style.color = "#4a7a5a")}>
                🌱 {s}
              </a>
            ))}
          </div>

          {/* Business Info */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "0.9rem", marginBottom: "1.2rem",
                          borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "0.6rem" }}>
              Business Info
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                { icon: "🏢", t: "Hammad & Company", s: "Registered seed business" },
                { icon: "📅", t: "Est. Sahiwal, Punjab", s: "Serving Pakistan 15+ years" },
                { icon: "🕐", t: "Mon–Thu & Sat: 9am–5pm", s: "Friday: 9am–12pm" },
                { icon: "🚚", t: "Nationwide Delivery", s: "All provinces" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8 }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ color: "#c8e6d0", fontSize: "0.82rem", fontWeight: 600 }}>{item.t}</div>
                    <div style={{ color: "#4a7a5a", fontSize: "0.74rem" }}>{item.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem",
                       borderTop: "1px solid rgba(255,255,255,0.05)",
                       display: "flex", justifyContent: "space-between",
                       alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ color: "#2a4a30", fontSize: "0.78rem" }}>
            © 2026 Hammad Seeds (Hammad & Company) — All rights reserved.
          </p>
          <p style={{ color: "#2a4a30", fontSize: "0.78rem" }}>
            Better Seed · Better Yield 🌱
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
