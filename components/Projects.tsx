"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    num: "01",
    label: "WEB • FULL-STACK • COLLABORATION",
    title: "Gestion de Projet",
    description:
      "Plateforme web de gestion de projets permettant de suivre l'avancement des tâches, gérer les équipes et collaborer en temps réel avec une interface moderne et fluide.",
    tags: ["ReactJS", "Django REST", "PostgreSQL", "Docker"],
    image: "/images/planning.png",
  },
  {
    num: "02",
    label: "MOBILE • FLUTTER",
    title: "Travel Booking App",
    description:
      "Application mobile de réservation de voyages permettant aux utilisateurs de rechercher des destinations, consulter des hôtels et gérer leurs réservations facilement.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: "/images/app_travel.png",
  },
  {
    num: "03",
    label: "MOBILE • REACT NATIVE",
    title: "Varotra-Anay",
    description:
      "Application mobile de gestion de ventes et de clients développée pour faciliter le suivi des produits, des ventes et des statistiques financières.",
    tags: ["React Native", "MySQL", "PHP"],
    image: "/images/vente.png",
  },
  {
    num: "04",
    label: "WEB • LARAVEL ",
    title: "I-Stock",
    description:
      "Application web intelligente de gestion de stock et de transactions permettant de suivre les fournitures, les entrées et sorties de stock ainsi que les agents responsables.",
    tags: ["Laravel",  "PHP", "Composer","MySQL", "MERISE"],
    image: "/images/stock.png",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

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
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return ref;
}

export default function Projects() {
  const header = useReveal();

  return (
    <section
      id="projets"
      style={{
        padding: "7rem 5%",
        background: "var(--bg2)",
      }}
    >
      {/* HEADER */}
      <div
        ref={header}
        className="reveal"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
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
              marginBottom: "0.7rem",
            }}
          >
            01 — Portfolio
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 400,
              color: "var(--text)",
            }}
          >
            Mes réalisations
          </h2>
        </div>
        <p
          style={{
            maxWidth: 380,
            color: "var(--muted2)",
            fontSize: "0.9rem",
            lineHeight: 1.8,
          }}
        >
          Des projets conçus avec une approche moderne, centrée sur
          l&apos;expérience utilisateur, l&apos;esthétique et la qualité technique.
        </p>
      </div>

      {/* PROJECTS GRID — responsive */}
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        /* Tablet : 2 colonnes */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile : 1 colonne */
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="reveal-scale project-card"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(160deg,var(--bg),var(--bg3))",
        border: "1px solid var(--line)",
        borderRadius: 20,
        overflow: "hidden",
        transition: "transform 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--line)";
      }}
    >
      {/* IMAGE */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 260,
          overflow: "hidden",
          background: "var(--bg)",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 600px) 100vw,
                 (max-width: 1024px) 50vw,
                 25vw"
          style={{
            objectFit: "contain",
            objectPosition: "top center",
            padding: "0.75rem",
            transition: "transform 0.5s ease",
          }}
        />
        {/* numéro flottant */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--line)",
            borderRadius: 8,
            padding: "0.25rem 0.6rem",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            color: "var(--accent)",
            fontWeight: 600,
          }}
        >
          {project.num}
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          flex: 1,
        }}
      >
        {/* Label */}
        <div
          style={{
            color: "var(--accent)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {project.label}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.25rem",
            lineHeight: 1.25,
            color: "var(--text)",
            fontWeight: 700,
            margin: 0,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: "var(--muted2)",
            fontSize: "0.85rem",
            lineHeight: 1.75,
            margin: 0,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--line)",
            margin: "0.25rem 0",
          }}
        />

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.3rem 0.75rem",
                borderRadius: 100,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--line)",
                color: "var(--muted2)",
                fontSize: "0.75rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
