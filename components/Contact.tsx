"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EJ_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY!;
const EJ_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE!;
const EJ_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!;

const contactLinks = [
  {
    label: "Email",
    value: "raltaty1704@gmail.com",
    href: "mailto:raltaty1704@gmail.com",
  },
  {
    label: "Whatsapp",
    value: "+261 34 68 868 13",
    href: "https://wa.me/261346886813",
  },
  {
    label: "GitHub",
    value: "https://github.com/Tatiannah",
    href: "https://github.com/Tatiannah",
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg)",
  border: "1px solid var(--line)",
  color: "var(--text)",
  borderRadius: 12,
  padding: "0.9rem 1rem",
  fontSize: "0.84rem",
  outline: "none",
  transition: "all 0.3s ease",
  fontFamily: "var(--font-sans)",
};

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "sending" | "ok" | "err"
  >("idle");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in");
            }, index * 120);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setStatus("sending");

    try {
      const form = e.currentTarget;

      await emailjs.sendForm(
        EJ_SERVICE,
        EJ_TEMPLATE,
        form,
        EJ_KEY
      );

      setStatus("ok");
      form.reset();

    } catch (error) {
      console.error("EMAIL ERROR:", error);
      setStatus("err");
    }
  }

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? "5rem 6%" : "7rem 5%",
        background: "var(--bg2)",
      }}
    >
      {/* HEADER */}
      <div
        ref={headerRef}
        className="contact-reveal reveal"
        style={{
          display: "flex",
          alignItems: isMobile ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "1.2rem" : "1rem",
          borderBottom: "1px solid var(--line)",
          paddingBottom: isMobile ? "2rem" : "2.5rem",
          marginBottom: isMobile ? "2.8rem" : "4rem",
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
            05 — Contact
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: isMobile
                ? "clamp(2.2rem,9vw,3rem)"
                : "clamp(2rem,3.5vw,2.8rem)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Discutons de votre projet
          </h2>
        </div>

        <p
          style={{
            color: "var(--muted2)",
            fontSize: isMobile ? "0.9rem" : "0.86rem",
            maxWidth: isMobile ? "100%" : 360,
            lineHeight: 1.8,
          }}
        >
          Disponible pour des opportunités en développement web,
          mobile et design d’interfaces modernes.
        </p>
      </div>

      {/* CONTENT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.1fr",
          gap: isMobile ? "2.5rem" : "3rem",
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div className="contact-reveal reveal-left">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: isMobile ? "1rem 0" : "1.1rem 0",
                borderBottom: "1px solid var(--line)",
                textDecoration: "none",
                color: "var(--text)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  const el = e.currentTarget;
                  el.style.paddingLeft = "0.6rem";
                  el.style.color = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  const el = e.currentTarget;
                  el.style.paddingLeft = "0";
                  el.style.color = "var(--text)";
                }
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--muted)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {item.label}
                </div>

                <div
                  style={{
                    fontSize: isMobile ? "0.82rem" : "0.86rem",
                    wordBreak: "break-word",
                  }}
                >
                  {item.value}
                </div>
              </div>

              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "1rem",
                }}
              >
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* FORM */}
        <div className="contact-reveal reveal-right">
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
              padding: isMobile ? "1.2rem" : "1.5rem",
              background: "var(--bg)",
              border: "1px solid var(--line)",
              borderRadius: isMobile ? 16 : 18,
              transition:
                "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow =
                  "0 20px 60px rgba(149,128,240,0.08)";
                el.style.borderColor = "var(--line2)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--line)";
              }
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "1fr 1fr",
                gap: "1rem",
              }}
            >
              <input
                type="text"
                name="from_name"
                placeholder="Votre nom"
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="from_email"
                placeholder="Votre email"
                required
                style={inputStyle}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Décrivez votre projet..."
              rows={isMobile ? 4 : 5}
              required
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />

            {status === "ok" && (
              <p
                style={{
                  color: "#4ade80",
                  fontSize: "0.82rem",
                }}
              >
                ✓ Message envoyé avec succès.
              </p>
            )}

            {status === "err" && (
              <p
                style={{
                  color: "#f87171",
                  fontSize: "0.82rem",
                }}
              >
                ✗ Impossible d’envoyer le message.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: 100,
                padding: isMobile
                  ? "0.85rem 1.4rem"
                  : "0.9rem 1.6rem",
                fontSize: "0.82rem",
                cursor:
                  status === "sending"
                    ? "not-allowed"
                    : "pointer",
                transition: "all 0.3s ease",
                opacity: status === "sending" ? 0.7 : 1,
                alignSelf: "flex-start",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) => {
                if (!isMobile && status !== "sending") {
                  e.currentTarget.style.transform =
                    "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              {status === "sending"
                ? "Envoi..."
                : "Envoyer le message ↗"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}