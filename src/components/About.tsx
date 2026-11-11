"use client";
import Logo from "./Logo";

const stats = [
  { n: "15+",   l: "Years in Business", icon: "🏆" },
  { n: "250+",  l: "Seed Varieties",    icon: "🌱" },
  { n: "5000+", l: "Happy Farmers",     icon: "👨‍🌾" },
  { n: "20+",   l: "Districts Served",  icon: "🗺️" },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "#fdf9f2" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="sec-label fu sil" style={{ marginBottom: 8 }}>Who We Are</p>
          <h2 className="sec-heading fu d1" style={{ marginBottom: "1rem" }}>About Hammad Seeds</h2>
          <div className="fu d2" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
            <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,transparent,#c9960c)" }} />
            <span style={{ color:"#c9960c", fontSize:"1rem", lineHeight:1 }}>❋</span>
            <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,#c9960c,transparent)" }} />
          </div>
        </div>

        {/* Two column */}
        <div className="grid-2" style={{ alignItems: "center", marginBottom: "3.5rem" }}>

          {/* Visual */}
          <div className="fu sil" style={{
            background: "linear-gradient(145deg,#1b4d2e,#256b3f)",
            borderRadius: 24, padding: "2.5rem", position: "relative", overflow: "hidden",
            boxShadow: "0 16px 50px rgba(27,77,46,0.35)",
          }}>
            {/* pattern */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
                          backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                          backgroundSize: "16px 16px" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Logo */}
              <div style={{ display:"flex", justifyContent:"center", marginBottom:"1rem" }}>
                <div style={{ borderRadius:"50%", overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,0.3)" }}>
                  <Logo size={72} />
                </div>
              </div>
              <h3 className="urdu" style={{ color: "#fff", fontSize: "1.5rem", textAlign: "center",
                                             marginBottom: "1.5rem", lineHeight: 1.8,
                                             paddingBottom: "0.3rem" }}>
                حماد سیڈز
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  "✅ Local seed experts",
                  "✅ Imported seeds",
                  "✅ All vegetables",
                  "✅ All crops",
                  "✅ Paddy & Wheat",
                  "✅ Fodder seeds",
                  "✅ Wholesale rates",
                  "✅ Delivery available",
                ].map((item, i) => (
                  <div key={i} style={{ color: "#b8dfc4", fontSize: "0.84rem", display: "flex", gap: 4 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <span style={{ position: "absolute", top: 12, left: 12, color: "#c9960c", fontSize: "1.4rem", opacity: 0.5 }}>❋</span>
            <span style={{ position: "absolute", bottom: 12, right: 12, color: "#c9960c", fontSize: "1.4rem", opacity: 0.5 }}>❋</span>
          </div>

          {/* Text */}
          <div className="fu d2" style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <h3 style={{ color: "#1b4d2e", fontSize: "1.4rem", fontWeight: 800, lineHeight: 1.3 }}>
              Pakistan's Trusted Seed Company Since Over a Decade
            </h3>
            {[
              "Hammad Seeds (Hammad & Company) is a leading agricultural seed supplier based at 62 Gulistan Road, Sahiwal, Punjab. We serve thousands of farmers across Pakistan with certified, high-yielding seed varieties.",
              "Our product range covers all major food crops — wheat, paddy (rice), maize — and over 200 varieties of vegetables including tomato, onion, chilli, capsicum, cucumber, brinjal, and much more.",
              "We also specialize in premium fodder seeds like Baseem (Berseem clover), making us a one-stop solution for both food crop and livestock fodder needs.",
              "Whether you're a small-scale farmer or a large agri-business, we offer competitive wholesale and retail pricing with nationwide delivery.",
            ].map((p, i) => (
              <p key={i} style={{ color: "#555", fontSize: "0.96rem", lineHeight: 1.8 }}>{p}</p>
            ))}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
              {["Local Seeds","Imported Seeds","Hybrid","Wheat","Paddy","Maize","Fodder","Wholesale"].map(t => (
                <span key={t} style={{ padding: "0.3rem 0.9rem", borderRadius: 999,
                                        fontSize: "0.78rem", fontWeight: 700,
                                        background: "rgba(27,77,46,0.07)",
                                        border: "1px solid rgba(27,77,46,0.2)", color: "#1b4d2e" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid-4">
          {stats.map((s, i) => (
            <div key={i} className="card fu" style={{ animationDelay: `${i * 0.1}s`,
                                                       padding: "2rem 1rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.4rem", marginBottom: "0.6rem" }}>{s.icon}</div>
              <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "#1b4d2e", lineHeight: 1 }}>
                {s.n}
              </div>
              <div style={{ color: "#777", fontSize: "0.84rem", marginTop: 6, fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
