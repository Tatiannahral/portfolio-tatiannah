"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#projets", label: "Projets" },
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({
  onToggleTheme,
  isDark,
}: {
  onToggleTheme: () => void;
  isDark: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Commence à null pour éviter le mismatch SSR/client
  const [mobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setMobile(isMobile);
      if (!isMobile) setMenuOpen(false);
    };

    handleResize(); // init côté client seulement
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Calcul précis du translateY selon gap + hauteur des barres
  // gap: 5px, height: 1.8px → déplacement = 5 + 1.8 = 6.8px ≈ 6.9px
  const BAR_OFFSET = "6.9px";

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 5%",
          background: scrolled
            ? "color-mix(in srgb, var(--bg) 88%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--line)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        {/* LOGO */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          RF{" "}
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
            Tatiannah
          </span>
        </a>

        {/* DESKTOP NAV — affiché uniquement si mobile === false */}
        {mobile === false && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <ul
              style={{
                display: "flex",
                gap: "2.4rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      color: "var(--muted2)",
                      textDecoration: "none",
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--muted2)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* AVAILABLE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.72rem",
                color: "var(--muted2)",
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
              Disponible
            </div>

            {/* THEME */}
            <button
              onClick={onToggleTheme}
              style={{
                background: "var(--accent-g)",
                border: "1px solid var(--line2)",
                color: "var(--accent)",
                borderRadius: 100,
                padding: "0.38rem 1rem",
                fontSize: "0.75rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {isDark ? "☀️ Clair" : "🌙 Sombre"}
            </button>
          </div>
        )}

        {/* MOBILE ACTIONS — affiché uniquement si mobile === true */}
        {mobile === true && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            {/* THEME */}
            <button
              onClick={onToggleTheme}
              style={{
                background: "var(--accent-g)",
                border: "1px solid var(--line2)",
                color: "var(--accent)",
                borderRadius: 100,
                padding: "0.35rem 0.8rem",
                fontSize: "0.72rem",
                cursor: "pointer",
              }}
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                width: 42,
                height: 42,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: 5,
                padding: 0,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 1.8,
                  background: "var(--text)",
                  borderRadius: 999,
                  display: "block",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? `rotate(45deg) translateY(${BAR_OFFSET})`
                    : "none",
                }}
              />
              <span
                style={{
                  width: 16, // légèrement plus courte pour un effet stylistique
                  height: 1.8,
                  background: "var(--text)",
                  borderRadius: 999,
                  display: "block",
                  transition: "transform 0.3s ease, opacity 0.3s ease, width 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                style={{
                  width: 22,
                  height: 1.8,
                  background: "var(--text)",
                  borderRadius: 999,
                  display: "block",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? `rotate(-45deg) translateY(-${BAR_OFFSET})`
                    : "none",
                }}
              />
            </button>
          </div>
        )}
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobile === true && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: "var(--bg)",
            padding: "7rem 8% 4rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            // Slide + fade animé via opacity + transform
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
            pointerEvents: menuOpen ? "all" : "none",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {/* Indicateur disponible dans le menu mobile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: "0.72rem",
              color: "var(--muted2)",
              marginBottom: "2rem",
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
            Disponible pour de nouveaux projets
          </div>

          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "clamp(1.6rem, 7vw, 2.2rem)",
                padding: "0.9rem 0",
                borderBottom: "1px solid var(--line)",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // Stagger d'apparition par lien
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.4s ease ${0.05 + i * 0.07}s, transform 0.4s ease ${0.05 + i * 0.07}s`,
              }}
            >
              {l.label}
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--accent)",
                  opacity: 0.6,
                  fontFamily: "monospace",
                }}
              >
                0{i + 1}
              </span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
