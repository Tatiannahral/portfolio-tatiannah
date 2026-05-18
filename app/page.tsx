"use client";
import { useState, useEffect } from "react";
import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import Projects   from "@/components/Projects";
import Services   from "@/components/Services";
import About      from "@/components/About";
import Experience from "@/components/Experience";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    /* Reveal observer — watches all reveal classes */
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function toggleTheme() {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("light");
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <Navbar onToggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
