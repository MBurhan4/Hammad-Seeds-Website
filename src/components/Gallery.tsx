"use client";
import Logo from "./Logo";

const items = [
  { emoji: "🌾", label: "Wheat Seed Bag 50kg",   sub: "Premium Quality · HAMMAD SEED",    bg: "linear-gradient(145deg,#3d2b00,#7a5900)" },
  { emoji: "🌾", label: "Paddy Seed Bag 20kg",   sub: "Basmati & IRRI · HAMMAD SEED",     bg: "linear-gradient(145deg,#0d2b4a,#1a5276)" },
  { emoji: "🌿", label: "Baseem Fodder 4kg",     sub: "Special Premium · Disease Resistant", bg: "linear-gradient(145deg,#083d2e,#148f77)" },
  { emoji: "🍅", label: "Hybrid Tomato Seeds",   sub: "High Yield · Imported",             bg: "linear-gradient(145deg,#4a1010,#c0392b)" },
  { emoji: "🧅", label: "Onion Seeds",           sub: "Certified Local · High Yield",      bg: "linear-gradient(145deg,#2d0a4a,#6a3093)" },
  { emoji: "🥔", label: "Potato Seeds",          sub: "Certified Seed Tubers",             bg: "linear-gradient(145deg,#3d1a00,#b34700)" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section"
             style={{ background: "linear-gradient(135deg,#0a1f0e,#133320)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ color: "#c9960c", fontSize: "0.7rem", fontWeight: 800,
                       letterSpacing: "4px", textTransform: "uppercase", marginBottom: 8 }}>
            Our Products
          </p>
          <h2 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, color: "#fff",
                        marginBottom: "0.6rem" }}>
            Product Gallery
          </h2>
          <p style={{ color: "#6a9e7a", fontSize: "0.9rem" }}>
            Premium seed packaging from Hammad & Company, 62 Gulistan Road, Sahiwal
          </p>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginTop:"1rem" }}>
            <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,transparent,#c9960c)" }} />
            <span style={{ color:"#c9960c", fontSize:"1rem", lineHeight:1 }}>❋</span>
            <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,#c9960c,transparent)" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1.4rem" }}>
          {items.map((item, i) => (
            <div key={i} className="card"
                 style={{ overflow: "hidden",
                           background: "#fff",
                           animationDelay: `${i * 0.08}s` }}>
              {/* Visual area mimicking product bag */}
              <div style={{ background: item.bg, height: 200, display: "flex", flexDirection: "column",
                             alignItems: "center", justifyContent: "center", position: "relative",
                             overflow: "hidden" }}>
                {/* pattern overlay */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.05,
                               backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                               backgroundSize: "12px 12px" }} />

                {/* Top seal strip */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 20,
                               background: "rgba(0,0,0,0.3)",
                               display: "flex", alignItems: "center", justifyContent: "center",
                               gap: 4 }}>
                  {[...Array(6)].map((_,j) => (
                    <div key={j} style={{ width: 8, height: 8, borderRadius: "50%",
                                           background: "rgba(255,255,255,0.3)" }} />
                  ))}
                </div>

                {/* Logo */}
                <div style={{ marginBottom: 10, borderRadius:"50%", overflow:"hidden",
                               boxShadow:"0 2px 12px rgba(0,0,0,0.3)" }}>
                  <Logo size={56} />
                </div>

                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.15rem",
                               textAlign: "center", textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                               padding: "0 1rem" }}>
                  {item.label}
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.72rem", marginTop: 4 }}>
                  {item.sub}
                </div>

                {/* Bottom strip */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
                               background: "rgba(0,0,0,0.25)", padding: "0.4rem",
                               textAlign: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.65rem",
                                  letterSpacing: 2, fontWeight: 700 }}>
                    HAMMAD &amp; COMPANY
                  </span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "1rem 1.2rem" }}>
                <div style={{ fontWeight: 800, color: "#1b4d2e", fontSize: "0.95rem",
                               marginBottom: "0.3rem" }}>
                  {item.label}
                </div>
                <div style={{ color: "#888", fontSize: "0.78rem" }}>{item.sub}</div>
                <a href="#contact"
                   style={{ display: "inline-block", marginTop: "0.8rem",
                             background: "linear-gradient(135deg,#1b4d2e,#256b3f)",
                             color: "#fff", fontSize: "0.78rem", fontWeight: 700,
                             padding: "0.4rem 1rem", borderRadius: 999,
                             textDecoration: "none" }}>
                  Get Price →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
