"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Développement web",
    desc: "Applications web modernes, responsive et performantes, avec une attention portée à la performance et à l'expérience utilisateur.",
  },
  {
    icon: "📱",
    title: "Développement mobile",
    desc: "Applications mobiles cross-platform avec interfaces fluides, navigation intuitive et logique produit claire.",
  },
  {
    icon: "🗄️",
    title: "Conception de base de données",
    desc: "Modélisation, structuration et optimisation des bases de données relationnelles pour des applications fiables et évolutives.",
  },
  {
    icon: "🚀",
    title: "Optimisation & Performance",
    desc: "Audit et amélioration des temps de chargement, des requêtes et de l'architecture pour des applications rapides et fluides.",
  },
];

export default function Services() {
  const header = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } },
      { threshold: 0.1 }
    );
    if (header.current) obs.observe(header.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: "7rem 5%" }}>
      <div
        ref={header}
        className="reveal"
        style={{ borderBottom: "1px solid var(--line)", paddingBottom: "2.5rem", marginBottom: "4rem" }}
      >
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.6rem" }}>
          02 — Services
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.1 }}>
          Ce que je peux réaliser
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
        {services.map((s, i) => (
          <ServiceCard key={i} s={s} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add("in"), delay); obs.unobserve(e.target); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="reveal-scale"
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--line)",
        borderRadius: 16,
        padding: "2rem",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: 46, height: 46, borderRadius: 12,
          background: "var(--accent-g)", border: "1px solid var(--line2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.3rem", marginBottom: "1.4rem",
        }}
      >
        {s.icon}
      </div>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 500, color: "var(--text)", marginBottom: "0.65rem" }}>
        {s.title}
      </h3>
      <p style={{ color: "var(--muted2)", fontSize: "0.84rem", lineHeight: 1.8 }}>{s.desc}</p>
    </div>
  );
}
