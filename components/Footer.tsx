export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "1.8rem 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: 0 }}>
        © 2026{" "}
        <span
          style={{
            color: "var(--text)",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
          }}
        >
          RALANTOARISON Faraniaina Tatiannah
        </span>
        . Tous droits réservés.
      </p>

      <p style={{ fontSize: "0.72rem", color: "var(--muted2)", margin: 0 }}>
        Portfolio développé avec{" "}
        <span style={{ color: "var(--text)" }}>Next.js</span>
        {" & "}
        <span style={{ color: "var(--text)" }}>Tailwind CSS</span>
      </p>


    </footer>
  );
}
