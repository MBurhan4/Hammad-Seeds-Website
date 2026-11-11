"use client";

const products = [
  {
    img: "/products/paddy-bag.svg",
    name: "Paddy Seed",
    type: "Local & Imported",
    typeBg: "#1a5276",
    desc: "Basmati & IRRI rice varieties. High germination rate, suitable for all paddy-growing regions of Pakistan.",
    details: ["Basmati / IRRI-6", "20kg bag", "Kharif Season", "High Yield"],
    badge: "Popular",
    badgeBg: "#1a5276",
  },
  {
    img: "/products/wheat-bag.svg",
    name: "Wheat Seed — 50kg",
    type: "Local Certified",
    typeBg: "#7a6000",
    desc: "High-yielding certified wheat seed. Suitable for Punjab & Sindh wheat belt. Better seed = better yield.",
    details: ["50kg Net Weight", "Certified Seed", "Rabi Season", "Premium Quality"],
    badge: "Best Seller",
    badgeBg: "#c0392b",
  },
  {
    img: "/products/baseem-bag.svg",
    name: "Special Premium Baseem Seed",
    type: "Quality Fodder",
    typeBg: "#1b4d2e",
    desc: "Special Premium quality Baseem (Berseem clover) fodder seed. High yield, disease resistant, long lasting.",
    details: ["4 KG Net Weight", "High Yield Fodder", "Disease Resistant", "Green Till End"],
    badge: "Special",
    badgeBg: "#148f77",
  },
];

export default function Products() {
  return (
    <section id="products" className="section"
      style={{ background: "linear-gradient(180deg,#fdf9f2,#eef5f1)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="sec-label" style={{ marginBottom: 8 }}>What We Offer</p>
          <h2 className="sec-heading" style={{ marginBottom: "0.6rem" }}>Our Products</h2>
          <p style={{ color: "#777", fontSize: "0.95rem", maxWidth: 540, margin: "0 auto 1rem" }}>
            Premium quality seeds from Hammad &amp; Company — retail and wholesale available
          </p>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
            <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,transparent,#c9960c)" }} />
            <span style={{ color:"#c9960c", fontSize:"1rem", lineHeight:1 }}>❋</span>
            <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,#c9960c,transparent)" }} />
          </div>
        </div>

        {/* ── Product Cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}>
          {products.map((p, i) => (
            <div key={i} className="card" style={{ overflow: "hidden" }}>

              {/* Product image — real SVG bag */}
              <div style={{
                background: "#f4f4f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                borderBottom: "1px solid rgba(27,77,46,0.08)",
                minHeight: 320,
              }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 300,
                    objectFit: "contain",
                    display: "block",
                    filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.18))",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "1.3rem 1.4rem 1.5rem" }}>
                {/* Type + Badge row */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
                               marginBottom: 8 }}>
                  <span style={{
                    background: p.typeBg, color: "#fff",
                    fontSize: "0.7rem", fontWeight: 800,
                    padding: "0.25rem 0.8rem", borderRadius: 999,
                  }}>
                    {p.type}
                  </span>
                  <span style={{
                    background: p.badgeBg, color: "#fff",
                    fontSize: "0.7rem", fontWeight: 800,
                    padding: "0.25rem 0.8rem", borderRadius: 999,
                  }}>
                    {p.badge}
                  </span>
                </div>

                <h3 style={{ fontWeight: 800, color: "#1b4d2e", fontSize: "1.05rem",
                              marginBottom: 6, lineHeight: 1.3 }}>
                  {p.name}
                </h3>

                <p style={{ color: "#666", fontSize: "0.86rem", lineHeight: 1.7,
                              marginBottom: 12 }}>
                  {p.desc}
                </p>

                {/* Detail chips */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
                  {p.details.map((d) => (
                    <span key={d} style={{
                      background: "rgba(27,77,46,0.07)", color: "#1b4d2e",
                      fontSize: "0.72rem", fontWeight: 600,
                      padding: "0.2rem 0.65rem", borderRadius: 999,
                      border: "1px solid rgba(27,77,46,0.14)",
                    }}>{d}</span>
                  ))}
                </div>

                <div style={{ display:"flex", alignItems:"center",
                               justifyContent:"space-between",
                               paddingTop:"0.9rem", borderTop:"1px solid #f0f0f0" }}>
                  <a href="#contact" style={{
                    background: "linear-gradient(135deg,#1b4d2e,#256b3f)",
                    color: "#fff", fontSize: "0.82rem", fontWeight: 700,
                    padding: "0.5rem 1.2rem", borderRadius: 999, textDecoration: "none",
                  }}>
                    Enquire Now
                  </a>
                  <span style={{ fontWeight: 800, color: "#c9960c", fontSize: "1rem" }}>
                    Best Price
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Wholesale Banner ── */}
        <div style={{
          marginTop: "2.5rem", borderRadius: 18, overflow: "hidden",
          background: "linear-gradient(135deg,#1b4d2e,#256b3f)",
          padding: "2rem 2.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", marginBottom: 4 }}>
              🏷️ Wholesale &amp; Bulk Orders Available
            </div>
            <div style={{ color: "#8ecaa0", fontSize: "0.9rem" }}>
              Special prices for dealers, distributors &amp; large-scale farmers across Pakistan
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:03006908055" className="btn-gold">📞 0300-6908055</a>
            <a href="mailto:hammadandcompany123@gmail.com" className="btn-outline">✉️ Email Us</a>
          </div>
        </div>

      </div>
    </section>
  );
}
