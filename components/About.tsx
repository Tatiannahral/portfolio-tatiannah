"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    label: "Langages",
    items: ["PHP", "Java", "JavaScript", "TypeScript", "Dart","Python",
],
  },
  {
    label: "Frameworks & Mobile",
    items: [
      "React",
      "React Native",
      "Flutter",
      "Laravel",
      "Node.js",
      "Django",
      "JSP / J2EE",
      "ExpressJS",
      "Bootstrap",
      "JQuery",
      "Ajax",
    ],
  },
  {
    label: "Bases de données",
    items: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
  label: "Conception & Architecture",
  items: ["UML", "MERISE", "2TUP", "MVC"],
  },
  {
    label: "DevOps & Outils",
    items: ["Docker", "Git", "GitHub", "Figma"],
  },
];

export default function About() {
  const header = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.1 }
    );

    [header, left, right].forEach((r) => {
      if (r.current) obs.observe(r.current);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="apropos"
      style={{
        padding: mobile ? "5rem 6%" : "7rem 5%",
        background: "var(--bg2)",
      }}
    >
      {/* HEADER */}
      <div
        ref={header}
        className="reveal"
        style={{
          borderBottom: "1px solid var(--line)",
          paddingBottom: mobile ? "2rem" : "2.5rem",
          marginBottom: mobile ? "3rem" : "4rem",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "0.8rem",
          }}
        >
          03 — À propos
        </div>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: mobile
              ? "clamp(2.4rem,9vw,3rem)"
              : "clamp(2rem,3.5vw,2.8rem)",
            fontWeight: 400,
            color: "var(--text)",
            lineHeight: 1.1,
          }}
        >
          Qui suis-je
        </h2>
      </div>

      {/* CONTENT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile
            ? "1fr"
            : "1fr 1fr",
          gap: mobile ? "3rem" : "5rem",
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div ref={left} className="reveal-left">
          {/* INTRO */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: mobile ? "1.15rem" : "1.2rem",
              fontStyle: "italic",
              color: "var(--text)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              borderLeft: "2px solid var(--accent)",
              paddingLeft: mobile ? "1rem" : "1.4rem",
              maxWidth: mobile ? "100%" : 500,
            }}
          >
            Une développeuse avec le{" "}
            <strong style={{ fontWeight: 500 }}>
              sens du détail, la polyvalence web et mobile
            </strong>{" "}
            — et l&apos;autonomie pour mener 
            un projet de A à Z.
          </p>

          {/* TEXT */}
          <p
            style={{
              color: "var(--muted2)",
              fontSize: mobile ? "0.92rem" : "0.9rem",
              lineHeight: 2,
              marginBottom: "1.2rem",
            }}
          >
           Développeuse full-stack, formée en conception et développement d’applications web et mobiles. J’accorde une attention particulière à l’esthétique du code comme de l’interface.
          </p>

          <p
            style={{
              color: "var(--muted2)",
              fontSize: mobile ? "0.92rem" : "0.9rem",
              lineHeight: 2,
              marginBottom: "2.5rem",
            }}
          >
           Curieuse et débrouillarde, je m’adapte vite aux nouveaux contextes et je prends en charge mes projets avec rigueur — du design de la base de données jusqu’au déploiement.
          </p>

          {/* LEFT */}
         {/* FORMATIONS */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  }}
>
  {/* PLUS RÉCENT */}
  <div
    style={{
      padding: "1rem 1.2rem",
      border: "1px solid var(--line2)",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.03)",
    }}
  >
    <p
      style={{
        color: "var(--accent)",
        fontWeight: 600,
        marginBottom: "0.4rem",
        fontSize: "0.9rem",
      }}
    >
      Master en Informatique
    </p>

    <p
      style={{
        color: "var(--muted2)",
        fontSize: "0.83rem",
        lineHeight: 1.7,
      }}
    >
      Génie Logiciel & Base de Données — École Nationale
      d’Informatique, Fianarantsoa • 2024 – 2026 (en cours)
    </p>
  </div>

  <div
    style={{
      padding: "1rem 1.2rem",
      border: "1px solid var(--line2)",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.03)",
    }}
  >
    <p
      style={{
        color: "var(--accent)",
        fontWeight: 600,
        marginBottom: "0.4rem",
        fontSize: "0.9rem",
      }}
    >
      Licence Professionnelle en Informatique
    </p>

    <p
      style={{
        color: "var(--muted2)",
        fontSize: "0.83rem",
        lineHeight: 1.7,
      }}
    >
      Génie Logiciel & Base de Données — École Nationale
      d’Informatique, Fianarantsoa • 2021 – 2024
    </p>
  </div>
</div>
        </div>

        {/* RIGHT */}
        <div ref={right} className="reveal-right">
          <div
            style={{
              background:
                "linear-gradient(180deg,var(--card-bg),var(--card-bg-secondary))",
              border: "1px solid var(--card-border)",
              borderRadius: 28,
              padding: mobile ? "1.5rem" : "2rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: mobile ? "1.7rem" : "2rem",
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            >
              Compétences & outils
            </h3>

            {skillGroups.map((g) => (
              <div
                key={g.label}
                style={{
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {g.label}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.55rem",
                  }}
                >
                  {g.items.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: mobile
                          ? "0.8rem"
                          : "0.78rem",
                        color: "var(--muted2)",
                        background: "var(--bg3)",
                        border:
                          "1px solid var(--line)",
                        padding:
                          "0.45rem 0.9rem",
                        borderRadius: 999,
                        transition: "0.3s",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}