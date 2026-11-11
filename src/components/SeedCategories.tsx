"use client";

const cats = [
  { e: "🍅", n: "Tomato",     d: "Desi & hybrid varieties",    c: "#e74c3c" },
  { e: "🧅", n: "Onion",      d: "Red, white & yellow",         c: "#8e44ad" },
  { e: "🌶️", n: "Chilli",    d: "Hot & sweet peppers",         c: "#c0392b" },
  { e: "🥔", n: "Potato",     d: "Certified high-yield",        c: "#d35400" },
  { e: "🥕", n: "Carrot",     d: "Orange & red types",          c: "#e67e22" },
  { e: "🥬", n: "Spinach",    d: "Desi & hybrid",               c: "#27ae60" },
  { e: "🌽", n: "Maize",      d: "Grain & fodder types",        c: "#f39c12" },
  { e: "🌾", n: "Wheat",      d: "Punjab certified",            c: "#b7950b" },
  { e: "🌾", n: "Paddy",      d: "Basmati & IRRI varieties",    c: "#2e86c1" },
  { e: "🫛", n: "Beans",      d: "Lobia & all varieties",       c: "#1abc9c" },
  { e: "🥒", n: "Cucumber",   d: "Long & round types",          c: "#2ecc71" },
  { e: "🎃", n: "Pumpkin",    d: "Round & long varieties",      c: "#e67e22" },
  { e: "🧄", n: "Garlic",     d: "Aromatic local crop",         c: "#7f8c8d" },
  { e: "🫑", n: "Capsicum",   d: "Colorful bell peppers",       c: "#27ae60" },
  { e: "🥦", n: "Broccoli",   d: "Imported hybrid",             c: "#1b7a3e" },
  { e: "🍆", n: "Brinjal",    d: "Long & round desi",           c: "#6c3483" },
  { e: "🌿", n: "Baseem",     d: "Premium fodder seed",         c: "#148f77" },
  { e: "🥬", n: "Cabbage",    d: "Early & late season",         c: "#1a5276" },
  { e: "🥗", n: "Lettuce",    d: "Iceberg & leaf types",        c: "#1e8449" },
  { e: "🌿", n: "Coriander",  d: "Fresh herb seeds",            c: "#239b56" },
];

export default function SeedCategories() {
  return (
    <section id="seeds" className="section" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="sec-label" style={{ marginBottom: 8 }}>Our Collection</p>
          <h2 className="sec-heading" style={{ marginBottom: "0.6rem" }}>Seed Categories</h2>
          <p style={{ color: "#888", fontSize: "0.95rem", maxWidth: 500, margin: "0 auto 1rem" }}>
            Over 20 categories of vegetable, crop, and fodder seeds available year-round
          </p>
          <div className="ornament"><span style={{ color: "#c9960c" }}>❋</span></div>
        </div>

        <div className="grid-auto">
          {cats.map((cat, i) => (
            <div key={i} className="card"
                 style={{ padding: "1.4rem 1rem", textAlign: "center",
                          animationDelay: `${i * 0.04}s`,
                          borderTop: `3px solid ${cat.c}22` }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", margin: "0 auto 0.8rem",
                             display: "flex", alignItems: "center", justifyContent: "center",
                             fontSize: "1.8rem",
                             background: cat.c + "12", border: `1.5px solid ${cat.c}25` }}>
                {cat.e}
              </div>
              <div style={{ fontWeight: 800, color: "#1b4d2e", fontSize: "0.92rem", marginBottom: "0.3rem" }}>
                {cat.n}
              </div>
              <div style={{ color: "#999", fontSize: "0.74rem" }}>{cat.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
