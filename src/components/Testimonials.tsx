"use client";

const reviews = [
  { name: "Muhammad Arshad",   city: "Sahiwal",    stars: 5, text: "Hammad Seeds wheat variety gave me 20% more yield this season. Quality is excellent and their staff is very helpful." },
  { name: "Ghulam Mustafa",    city: "Okara",      stars: 5, text: "I've been buying onion and tomato seeds from them for 5 years. Best prices in the market and genuine certified seeds." },
  { name: "Tariq Mehmood",     city: "Faisalabad", stars: 5, text: "Their Baseem fodder seeds are top quality. My dairy farm has seen great improvement in milk production since I switched to their seeds." },
  { name: "Nazir Ahmed",       city: "Multan",     stars: 5, text: "Very satisfied with their paddy seed. Germination rate was near 100% and the crop stood strong against disease." },
  { name: "Shahid Iqbal",      city: "Gujranwala", stars: 5, text: "Professional company with great service. They guided me on the right seed variety for my soil type. Very trustworthy." },
  { name: "Zafar Ali",         city: "Khanewal",   stars: 5, text: "Wholesale prices are very competitive. I supply to 20+ farmers and everyone praises Hammad Seeds quality." },
];

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "#fdf9f2" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="sec-label" style={{ marginBottom: 8 }}>Customer Reviews</p>
          <h2 className="sec-heading" style={{ marginBottom: "0.6rem" }}>What Farmers Say</h2>
          <p style={{ color: "#888", fontSize: "0.95rem", maxWidth: 480, margin: "0 auto 1rem" }}>
            Trusted by thousands of farmers across Punjab, Sindh, and beyond
          </p>
          <div className="ornament"><span style={{ color: "#c9960c" }}>❋</span></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.4rem" }}>
          {reviews.map((r, i) => (
            <div key={i} className="card" style={{ padding: "1.6rem 1.5rem" }}>
              {/* Stars */}
              <div style={{ color: "#c9960c", fontSize: "1rem", marginBottom: "0.9rem", letterSpacing: 2 }}>
                {"★".repeat(r.stars)}
              </div>
              {/* Quote */}
              <div style={{ fontSize: "2.5rem", color: "#1b4d2e", opacity: 0.12,
                             lineHeight: 1, marginBottom: "0.5rem", fontFamily: "Georgia, serif" }}>
                "
              </div>
              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.2rem",
                           fontStyle: "italic" }}>
                {r.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10,
                             paddingTop: "1rem", borderTop: "1px solid #f0f0f0" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%",
                               background: "linear-gradient(135deg,#1b4d2e,#256b3f)",
                               display: "flex", alignItems: "center", justifyContent: "center",
                               color: "#fff", fontWeight: 800, fontSize: "1rem" }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#1b4d2e", fontSize: "0.9rem" }}>{r.name}</div>
                  <div style={{ color: "#aaa", fontSize: "0.76rem" }}>📍 {r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
