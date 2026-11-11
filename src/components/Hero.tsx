"use client";
import Logo from "./Logo";

const particles = [
  { size: 6,  left: "8%",  delay: "0s",   dur: "8s",  color: "rgba(201,150,12,0.6)" },
  { size: 4,  left: "22%", delay: "2s",   dur: "11s", color: "rgba(37,107,63,0.8)" },
  { size: 8,  left: "38%", delay: "4s",   dur: "9s",  color: "rgba(201,150,12,0.4)" },
  { size: 3,  left: "55%", delay: "1s",   dur: "12s", color: "rgba(255,255,255,0.3)" },
  { size: 5,  left: "72%", delay: "3s",   dur: "10s", color: "rgba(201,150,12,0.5)" },
  { size: 7,  left: "88%", delay: "5s",   dur: "7s",  color: "rgba(37,107,63,0.6)" },
  { size: 3,  left: "14%", delay: "6s",   dur: "13s", color: "rgba(255,255,255,0.2)" },
  { size: 5,  left: "50%", delay: "0.5s", dur: "8.5s",color: "rgba(201,150,12,0.3)" },
];

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div key={i} className="particle" style={{
          width: p.size, height: p.size, left: p.left, bottom: "-10px",
          background: p.color,
          animationDelay: p.delay, animationDuration: p.dur,
        }} />
      ))}

      {/* Decorative corner circles */}
      <div style={{ position:"absolute", top:20, right:20, width:220, height:220,
                    borderRadius:"50%", border:"1px solid rgba(201,150,12,0.1)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:50, right:50, width:160, height:160,
                    borderRadius:"50%", border:"1px solid rgba(201,150,12,0.07)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:40, left:30, width:130, height:130,
                    borderRadius:"50%", border:"1px solid rgba(37,107,63,0.2)", pointerEvents:"none" }} />

      {/* ── Main content ── */}
      <div style={{
        position:"relative", zIndex:10, textAlign:"center",
        padding:"5rem 2rem", maxWidth:860, width:"100%", margin:"0 auto"
      }}>

        {/* Logo with spinning ring */}
        <div className="fu" style={{ display:"inline-block", position:"relative", marginBottom:"2.2rem" }}>
          {/* Dashed spinning ring */}
          <div className="spin-slow" style={{
            position:"absolute",
            top:-20, left:-20, right:-20, bottom:-20,
            borderRadius:"50%",
            border:"2px dashed rgba(201,150,12,0.25)",
          }} />
          {/* Logo */}
          {/* Logo — SVG already has green circle, no wrapper needed */}
          <div className="float pulse" style={{
            display:"inline-flex",
            borderRadius:"50%",
            overflow:"hidden",
            boxShadow:"0 8px 40px rgba(0,0,0,0.6), 0 0 0 4px rgba(201,150,12,0.3)",
          }}>
            <Logo size={130} />
          </div>
        </div>

        {/* ── Urdu name ── */}
        <div className="fu d1" style={{ marginBottom: "1.6rem" }}>
          <h1
            className="urdu"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.8,
              color: "#e0aa14",
              display: "block",
              textShadow: "0 2px 20px rgba(201,150,12,0.4), 0 0 40px rgba(201,150,12,0.2)",
              letterSpacing: 0,
              overflowWrap: "break-word",
              wordBreak: "keep-all",
              padding: "0 1rem",
              paddingBottom: "0.4rem",
            }}
          >
            حماد سیڈز
          </h1>
        </div>

        {/* English subtitle — safely below Urdu */}
        <div className="fu d2" style={{ marginBottom: "1.2rem" }}>
          <div style={{
            color: "#c9960c", fontSize: "0.78rem", letterSpacing: "5px",
            fontWeight: 800, textTransform: "uppercase",
          }}>
            ✦ HAMMAD SEEDS ✦
          </div>
        </div>

        {/* Gold ornament — custom, NOT using .ornament class to avoid pseudo-element dots */}
        <div className="fu d2" style={{
          display:"flex", alignItems:"center", justifyContent:"center",
          gap:10, marginBottom:"1.4rem"
        }}>
          <div style={{ width:60, height:1.5, background:"linear-gradient(90deg,transparent,#c9960c)" }} />
          <span style={{ color:"#c9960c", fontSize:"1.1rem", lineHeight:1 }}>❋</span>
          <div style={{ width:60, height:1.5, background:"linear-gradient(90deg,#c9960c,transparent)" }} />
        </div>

        <div className="fu d3" style={{ marginBottom:"0.7rem" }}>
          <p style={{ color:"#b8dfc4", fontSize:"clamp(1rem,2.5vw,1.25rem)", fontWeight:500 }}>
            Specialists in <strong style={{ color:"#fff" }}>Local & Imported Seeds</strong>
          </p>
        </div>
        <div className="fu d3" style={{ marginBottom:"2.8rem" }}>
          <p style={{ color:"#5a8e6a", fontSize:"0.88rem" }}>
            All Vegetables • All Crops • Paddy • Wheat • Fodder • Sahiwal, Punjab
          </p>
        </div>

        {/* CTA */}
        <div className="fu d4" style={{
          display:"flex", gap:"1rem", justifyContent:"center",
          flexWrap:"wrap", marginBottom:"3rem"
        }}>
          <a href="#products" className="btn-gold">View Products</a>
          <a href="#contact"  className="btn-outline">Contact Us</a>
        </div>

        {/* Contact strip */}
        <div className="fu d5" style={{
          display:"flex", justifyContent:"center", gap:"2rem",
          flexWrap:"wrap", padding:"1rem 1.5rem", borderRadius:999,
          background:"rgba(255,255,255,0.05)",
          border:"1px solid rgba(255,255,255,0.08)",
        }}>
          {[
            { icon:"📞", text:"0300-6908055" },
            { icon:"📍", text:"62 Gulistan Road, Sahiwal" },
            { icon:"📧", text:"hammadandcompany123@gmail.com" },
          ].map((item,i) => (
            <div key={i} style={{
              display:"flex", alignItems:"center", gap:7,
              color:"#6a9e7a", fontSize:"0.8rem"
            }}>
              <span>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div style={{ position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)" }}
           className="animate-bounce">
        <svg width="24" height="24" fill="none" stroke="#c9960c" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
