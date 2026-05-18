"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stack = [
   "Laravel",
  "Django",
  "Flutter",
  "React",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "MySQL",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => ref.current?.classList.add("in"), 120);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        alignItems: "center",
        gap: isMobile ? "4rem" : "4rem",
        padding: isMobile
          ? "7rem 6% 4rem"
          : "8rem 5% 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: isMobile ? 400 : 700,
          height: isMobile ? 400 : 700,
          background:
            "radial-gradient(circle, rgba(149,128,240,0.12) 0%, transparent 65%)",
          top: isMobile ? -120 : -180,
          right: isMobile ? -120 : -150,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: isMobile ? 250 : 400,
          height: isMobile ? 250 : 400,
          background:
            "radial-gradient(circle, rgba(149,128,240,0.06) 0%, transparent 65%)",
          bottom: 0,
          left: "5%",
          pointerEvents: "none",
        }}
      />

      {/* LEFT */}
      <div
        ref={ref}
        className="reveal"
        style={{
          order: isMobile ? 1 : 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            background: "var(--accent-g)",
            border: "1px solid var(--line2)",
            color: "var(--accent)",
            fontSize: isMobile ? "0.68rem" : "0.75rem",
            fontWeight: 400,
            padding: isMobile
              ? "0.38rem 0.9rem"
              : "0.4rem 1rem",
            borderRadius: 100,
            marginBottom: isMobile ? "1.5rem" : "1.8rem",
            letterSpacing: "0.05em",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 8px #4ade80",
              animation: "blink 2.5s ease-in-out infinite",
              display: "inline-block",
            }}
          />
          Développeuse Full-Stack • Web • Mobile
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: isMobile
              ? "clamp(2.6rem,11vw,4rem)"
              : "clamp(2.4rem, 5vw, 4.2rem)",
            fontWeight: 300,
            lineHeight: isMobile ? 1.05 : 1.08,
            color: "var(--text)",
            marginBottom: "1.4rem",
            letterSpacing: "-0.02em",
          }}
        >
          Je transforme des idées en{" "}
          <em
            style={{
              color: "var(--accent)",
              fontStyle: "italic",
            }}
          >
            produits digitaux
          </em>{" "}
          modernes & élégants.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "var(--muted2)",
            fontSize: isMobile ? "0.92rem" : "0.95rem",
            maxWidth: 520,
            marginBottom: "2.2rem",
            lineHeight: 1.9,
          }}
        >
          Développeuse full-stack, j&apos;interviens sur tout le
          cycle de vie d&apos;un projet : analyse, conception,
          développement, intégration et déploiement.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "2.4rem",
          }}
        >
          <a
            href="#projets"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: isMobile
                ? "0.78rem 1.4rem"
                : "0.75rem 1.8rem",
              borderRadius: 100,
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.82rem",
              transition: "all 0.2s",
              letterSpacing: "0.02em",
            }}
          >
            Voir mes projets →
          </a>

          <a
            href="/cv/CV_RALANTOARISON_Tatiannah.pdf"
            download
            style={{
              border: "1px solid var(--line2)",
              color: "var(--muted2)",
              padding: isMobile
                ? "0.78rem 1.4rem"
                : "0.75rem 1.8rem",
              borderRadius: 100,
              textDecoration: "none",
              fontSize: "0.82rem",
              transition: "all 0.2s",
            }}
          >
            Télécharger mon CV ↓
          </a>

          <a
            href="/cv/CV_RALANTOARISON_Tatiannah.pdf"
            target="_blank"
            style={{
              border: "1px solid var(--line)",
              color: "var(--muted)",
              padding: isMobile
                ? "0.78rem 1.4rem"
                : "0.75rem 1.8rem",
              borderRadius: 100,
              textDecoration: "none",
              fontSize: "0.82rem",
              transition: "all 0.2s",
            }}
          >
            Voir mon CV ↗
          </a>
        </div>

        {/* Stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {stack.map((t) => (
            <span
              key={t}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--line)",
                color: "var(--muted2)",
                fontSize: isMobile ? "0.72rem" : "0.75rem",
                padding: isMobile
                  ? "0.34rem 0.8rem"
                  : "0.28rem 0.75rem",
                borderRadius: 100,
                transition: "all 0.2s",
                cursor: "default",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="reveal-right"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? "1.2rem" : "1.5rem",
          position: "relative",
          order: isMobile ? 3 : 2,
        }}
      >
        {/* Photo ring */}
        <div
          style={{
            width: isMobile ? 230 : 280,
            height: isMobile ? 230 : 280,
            borderRadius: "50%",
            border: "1.5px solid transparent",
            background:
              "linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, var(--accent), var(--accent-d)) border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(149,128,240,0.12) 0%, transparent 70%)",
              animation: "float 5s ease-in-out infinite",
            }}
          />

          <div
            style={{
              position: "relative",
              width: isMobile ? 210 : 260,
              height: isMobile ? 210 : 260,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--bg3), var(--bg2))",
              overflow: "hidden",
            }}
          >
            <Image
  src="/images/photo.png"
  alt="Photo"
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  style={{ objectFit: "cover" }}
/>
          </div>
        </div>

        {/* Identity */}
        <p
          style={{
            color: "var(--muted2)",
            fontSize: isMobile ? "0.82rem" : "0.85rem",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          RALANTOARISON Tatiannah
          <br />
          <span
            style={{
              color: "var(--muted)",
              fontSize: isMobile ? "0.74rem" : "0.78rem",
            }}
          >
            Développeuse Full-Stack
          </span>
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.7rem",
            width: "100%",
            maxWidth: isMobile ? 320 : 340,
          }}
        >
          {[
            { n: "5+", l: "Projets réalisés" },
            { n: "A→Z", l: "Cycle complet" },
            { n: "100%", l: "Passion & engagement" },
          ].map((s) => (
            <div
              key={s.n}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                padding: isMobile ? "0.8rem" : "0.9rem",
                textAlign: "center",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: isMobile ? "1.3rem" : "1.6rem",
                  fontWeight: 500,
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </div>

              <div
                style={{
                  fontSize: isMobile ? "0.64rem" : "0.68rem",
                  color: "var(--muted2)",
                  marginTop: "0.3rem",
                  lineHeight: 1.3,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}