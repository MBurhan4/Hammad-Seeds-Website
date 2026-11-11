"use client";

const reasons = [
  { icon: "🏆", t: "15+ Years Experience",       d: "Trusted by thousands of farmers across Pakistan for over 15 years." },
  { icon: "🌍", t: "Imported & Local Seeds",      d: "We source from Europe, Japan & Netherlands, plus the best local certified varieties." },
  { icon: "💰", t: "Competitive Wholesale Prices",d: "Best quality at fair prices with special rates for bulk buyers and dealers." },
  { icon: "🚜", t: "Free Farmer Guidance",        d: "Technical support on seed selection, sowing time, and crop management at no extra cost." },
  { icon: "📦", t: "Nationwide Delivery",          d: "Fast and reliable delivery to all provinces and districts of Pakistan." },
  { icon: "🔬", t: "Research-Backed Selection",   d: "Every seed we carry is tested and selected based on Pakistan's climate and soil." },
  { icon: "✅", t: "Certified Quality",            d: "All seeds are certified and meet national quality standards before we stock them." },
  { icon: "🤝", t: "Trusted by Dealers",          d: "Preferred supplier for agri dealers, distributors, and farm cooperatives." },
];

export default function WhyUs() {
  return (
    <section id="whyus"
             style={{ background: "linear-gradient(150deg,#061209 0%,#0a1f0e 30%,#133320 70%,#1b4d2e 100%)",
                      padding: "5.5rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Grid pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
                    backgroundImage: "linear-gradient(rgba(201,150,12,0.5) 1px,transparent 1px), linear-gradient(90deg,rgba(201,150,12,0.5) 1px,transparent 1px)",
                    backgroundSize: "50px 50px" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ color: "#c9960c", fontSize: "0.7rem", fontWeight: 800,
                       letterSpacing: "4px", textTransform: "uppercase", marginBottom: 8 }}>
            Why Choose Us
          </p>
          <h2 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, color: "#fff",
                        marginBottom: "0.6rem" }}>
            The Hammad Seeds Difference
          </h2>
          <p style={{ color: "#6a9e7a", fontSize: "0.9rem", maxWidth: 480, margin: "0 auto 1rem" }}>
            Here's why Pakistan's farmers choose us season after season
          </p>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginTop:"1rem" }}>
            <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,transparent,#c9960c)" }} />
            <span style={{ color:"#c9960c", fontSize:"1rem", lineHeight:1 }}>❋</span>
            <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,#c9960c,transparent)" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1.4rem" }}>
          {reasons.map((r, i) => (
            <div key={i} className="card"
                 style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                           padding: "1.8rem 1.5rem", animationDelay: `${i * 0.08}s` }}>
              <div style={{ width: 54, height: 54, borderRadius: 14, marginBottom: "1rem",
                             display: "flex", alignItems: "center", justifyContent: "center",
                             fontSize: "1.6rem",
                             background: "rgba(201,150,12,0.12)",
                             border: "1px solid rgba(201,150,12,0.25)" }}>
                {r.icon}
              </div>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem" }}>
                {r.t}
              </h3>
              <p style={{ color: "#6a9e7a", fontSize: "0.86rem", lineHeight: 1.7 }}>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
