const items = [
  "🌾 Premium Wheat Seeds Available",
  "🍅 Hybrid Tomato Seeds",
  "🌿 Baseem Fodder Seeds",
  "🌾 Paddy / Rice Seeds",
  "🧅 High-Yield Onion Seeds",
  "🌽 Hybrid Maize Seeds",
  "🥔 Certified Potato Seeds",
  "🌶️ Chilli & Capsicum Seeds",
  "📦 Wholesale Prices Available",
  "🚚 Delivery Across Pakistan",
  "📞 Call: 0300-6908055",
  "📍 62 Gulistan Road, Sahiwal",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-block", padding: "0 2.5rem",
                                  color: "#c9960c", fontSize: "0.82rem", fontWeight: 600 }}>
            {item}
            <span style={{ marginLeft: "2.5rem", color: "rgba(201,150,12,0.3)" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
