"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", seed: "", message: "" });
  const [sent, setSent] = useState(false);

  const seeds = ["Wheat","Paddy / Rice","Baseem Fodder","Tomato","Onion","Potato","Maize","Chilli","Capsicum","Other"];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", phone: "", seed: "", message: "" });
  };

  const info = [
    { icon: "📞", label: "Phone",   val: "0300-6908055",                      link: "tel:03006908055" },
    { icon: "📧", label: "Email",   val: "hammadandcompany123@gmail.com",     link: "mailto:hammadandcompany123@gmail.com" },
    { icon: "📍", label: "Address", val: "62 Gulistan Road, Sahiwal, Punjab, Pakistan", link: null },
    { icon: "🕐", label: "Hours",   val: "Mon–Thu & Sat: 9:00am – 5:00pm  |  Fri: 9:00am – 12:00pm", link: null },
  ];

  return (
    <section id="contact" className="section" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="sec-label" style={{ marginBottom: 8 }}>Reach Us</p>
          <h2 className="sec-heading" style={{ marginBottom: "0.6rem" }}>Contact Hammad Seeds</h2>
          <p style={{ color: "#888", fontSize: "0.95rem", maxWidth: 480, margin: "0 auto 1rem" }}>
            Visit our store in Sahiwal or reach out via phone, email, or the form below
          </p>
          <div className="ornament"><span style={{ color: "#c9960c" }}>❋</span></div>
        </div>

        <div className="grid-2" style={{ gap: "2.5rem" }}>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {info.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start",
                                     background: "#fdf9f2", borderRadius: 14, padding: "1.2rem 1.3rem",
                                     border: "1px solid rgba(27,77,46,0.09)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                               background: "rgba(27,77,46,0.08)", display: "flex",
                               alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#c9960c",
                                  textTransform: "uppercase", letterSpacing: "2px", marginBottom: 4 }}>
                    {item.label}
                  </div>
                  {item.link ? (
                    <a href={item.link} style={{ color: "#1b4d2e", fontWeight: 700,
                                                   fontSize: "0.9rem", textDecoration: "none",
                                                   wordBreak: "break-all" }}>
                      {item.val}
                    </a>
                  ) : (
                    <div style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.5 }}>{item.val}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Map card */}
            <div style={{ borderRadius: 14, overflow: "hidden",
                           background: "linear-gradient(135deg,#1b4d2e,#256b3f)",
                           padding: "1.8rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.4rem", marginBottom: "0.7rem" }}>🗺️</div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", marginBottom: 4 }}>
                Visit Our Store
              </div>
              <div style={{ color: "#b8dfc4", fontSize: "0.84rem", lineHeight: 1.6 }}>
                62 Gulistan Road<br />Sahiwal, Punjab, Pakistan
              </div>
              <div style={{ marginTop: "0.8rem", color: "#c9960c", fontSize: "0.78rem",
                             fontWeight: 700 }}>
                Open 6 days a week
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#fdf9f2", borderRadius: 20, padding: "2.2rem",
                         border: "1px solid rgba(201,150,12,0.15)",
                         boxShadow: "0 4px 30px rgba(27,77,46,0.07)" }}>
            <h3 style={{ fontWeight: 800, color: "#1b4d2e", fontSize: "1.2rem",
                          marginBottom: "1.5rem", textAlign: "center" }}>
              Send Us a Message
            </h3>

            {sent && (
              <div style={{ background: "#eef9f1", border: "1px solid #256b3f", borderRadius: 10,
                             padding: "0.9rem 1rem", marginBottom: "1.2rem", color: "#1b4d2e",
                             fontSize: "0.9rem", fontWeight: 700, textAlign: "center" }}>
                ✅ Your message has been sent! We'll reply shortly.
              </div>
            )}

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Name + Phone row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                {[
                  { label: "Full Name",     key: "name",  type: "text", ph: "Your name" },
                  { label: "Phone Number",  key: "phone", type: "tel",  ph: "03XX-XXXXXXX" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 800,
                                     color: "#555", marginBottom: 5, textTransform: "uppercase",
                                     letterSpacing: "0.5px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.ph} required
                           value={form[f.key as keyof typeof form]}
                           onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                           style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: 10,
                                     border: "1.5px solid #e0e0e0", fontSize: "0.88rem",
                                     background: "#fff", outline: "none" }}
                           onFocus={e => (e.target.style.borderColor = "#256b3f")}
                           onBlur={e => (e.target.style.borderColor = "#e0e0e0")} />
                  </div>
                ))}
              </div>

              {/* Seed dropdown */}
              <div>
                <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 800,
                                  color: "#555", marginBottom: 5, textTransform: "uppercase",
                                  letterSpacing: "0.5px" }}>Which Seed Are You Looking For?</label>
                <select value={form.seed} onChange={e => setForm(p => ({ ...p, seed: e.target.value }))}
                        style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: 10,
                                  border: "1.5px solid #e0e0e0", fontSize: "0.88rem",
                                  background: "#fff", outline: "none" }}>
                  <option value="">— Select a seed type —</option>
                  {seeds.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 800,
                                  color: "#555", marginBottom: 5, textTransform: "uppercase",
                                  letterSpacing: "0.5px" }}>Message</label>
                <textarea rows={4} placeholder="Quantity needed, specific variety, delivery location..."
                          required
                          value={form.message}
                          onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                          style={{ width: "100%", padding: "0.7rem 0.9rem", borderRadius: 10,
                                    border: "1.5px solid #e0e0e0", fontSize: "0.88rem",
                                    background: "#fff", outline: "none", resize: "vertical" }}
                          onFocus={e => (e.target.style.borderColor = "#256b3f")}
                          onBlur={e => (e.target.style.borderColor = "#e0e0e0")} />
              </div>

              <button type="submit"
                      style={{ width: "100%", padding: "0.9rem", borderRadius: 12,
                                background: "linear-gradient(135deg,#1b4d2e,#256b3f)",
                                color: "#fff", fontWeight: 800, fontSize: "1rem",
                                border: "none", cursor: "pointer",
                                boxShadow: "0 4px 16px rgba(27,77,46,0.3)" }}>
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
