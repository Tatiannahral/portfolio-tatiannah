"use client";

import { useEffect } from "react";

const exps = [
  {
    role: "Développeuse Full-Stack",
    company: "ISALOSYS — Antananarivo",
    period: "Août 2024 — Novembre 2024",
    current: true,
    desc: "Conception et réalisation d'une application web paramétrable de gestion de cabinet médical. Outils : Visual Paradigm, Django, React, Reat Native, PostgreSQL, UML, 2TUP.",
  },
  {
    role: "Développeuse Laravel",
    company: "Service Régional de la Solde et des Pensions — Ambositra",
    period: "Octobre 2023 — Décembre 2023",
    current: false,
    desc: "Conception et réalisation d'une application web de gestion de stock au service de l'entité publique. Outils : VSCode, Server XAMPP, PHP, Composer, Merise.",
  },
];

export default function Experience() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in");
            }, index * 140);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      style={{
        padding: "7rem 5%",
        background: "var(--bg)",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        className="reveal"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          borderBottom: "1px solid var(--line)",
          paddingBottom: "2.5rem",
          marginBottom: "4rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "0.6rem",
            }}
          >
            04 — Expérience
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,3.5vw,2.8rem)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Mon parcours
          </h2>
        </div>

        <p
          style={{
            color: "var(--muted2)",
            fontSize: "0.86rem",
            maxWidth: 360,
            lineHeight: 1.8,
          }}
        >
          Des expériences orientées développement full-stack,
          applications modernes et conception d&apos;interfaces élégantes.
        </p>
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          maxWidth: 950,
          margin: "0 auto",
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 24,
            top: 0,
            width: 1,
            height: "100%",
            background:
              "linear-gradient(to bottom, transparent, var(--line), transparent)",
          }}
        />

        {/* ✅ CORRIGÉ : renommé "e" en "exp" pour éviter le shadowing avec l'événement souris */}
        {exps.map((exp, index) => (
          <div
            key={index}
            className="timeline-card reveal"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {/* Dot */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  marginTop: "0.5rem",
                  zIndex: 2,
                  position: "relative",
                  boxShadow:
                    "0 0 0 6px color-mix(in srgb, var(--accent) 12%, transparent)",
                }}
              >
                {exp.current && (
                  <div
                    style={{
                      position: "absolute",
                      inset: -6,
                      borderRadius: "50%",
                      border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                      animation: "pulseRing 2s infinite",
                    }}
                  />
                )}
              </div>
            </div>

            {/* Card */}
            <div
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--line)",
                borderRadius: 18,
                padding: "1.6rem",
                transition:
                  "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(ev) => {
                const el = ev.currentTarget;
                el.style.borderColor = "var(--line2)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow =
                  "0 20px 60px rgba(149,128,240,0.08)";
              }}
              onMouseLeave={(ev) => {
                const el = ev.currentTarget;
                el.style.borderColor = "var(--line)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Period */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.3rem 0.75rem",
                  borderRadius: 999,
                  background: "var(--accent-g)",
                  border: "1px solid var(--line2)",
                  color: "var(--accent)",
                  fontSize: "0.72rem",
                  marginBottom: "1rem",
                }}
              >
                {exp.period}
              </div>

              {/* Role */}
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  marginBottom: "0.45rem",
                }}
              >
                {exp.role}
              </h3>

              {/* Company */}
              <div
                style={{
                  color: "var(--accent)",
                  fontSize: "0.82rem",
                  marginBottom: "1rem",
                }}
              >
                {exp.company}
              </div>

              {/* Description */}
              <p
                style={{
                  color: "var(--muted2)",
                  fontSize: "0.86rem",
                  lineHeight: 1.8,
                }}
              >
                {exp.desc}
              </p>

              {/* Badge */}
              {exp.current && (
                <div
                  style={{
                    marginTop: "1.2rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: 999,
                    background: "rgba(74,222,128,0.08)",
                    border: "1px solid rgba(74,222,128,0.15)",
                    color: "#4ade80",
                    fontSize: "0.7rem",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#4ade80",
                      animation: "blink 2s infinite",
                    }}
                  />
                  Expérience récente
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
