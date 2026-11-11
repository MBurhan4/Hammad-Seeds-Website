import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import SeedCategories from "@/components/SeedCategories";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ZigZag = ({ flip = false, fromColor = "#fdf9f2", toColor = "#fff" }) => (
  <div style={{ lineHeight: 0, background: fromColor }}>
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 40, transform: flip ? "scaleY(-1)" : "none" }}>
      <path d="M0,0 L80,40 L160,0 L240,40 L320,0 L400,40 L480,0 L560,40 L640,0 L720,40 L800,0 L880,40 L960,0 L1040,40 L1120,0 L1200,40 L1280,0 L1360,40 L1440,0 L1440,0 L0,0 Z"
            fill={toColor} />
    </svg>
  </div>
);

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Ticker />

      <About />
      <ZigZag fromColor="#fdf9f2" toColor="#fff" />

      <SeedCategories />
      <ZigZag fromColor="#fff" toColor="linear-gradient(180deg,#fdf9f2,#eef5f1)" flip />

      <Products />

      <Gallery />

      <WhyUs />

      <ZigZag fromColor="#1b4d2e" toColor="#fdf9f2" />
      <Testimonials />

      <ZigZag fromColor="#fdf9f2" toColor="#fff" />
      <Contact />

      <Footer />
    </main>
  );
}
