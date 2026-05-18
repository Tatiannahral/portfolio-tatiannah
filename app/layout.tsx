import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "RALANTOARISON Tatiannah — Développeuse Full-Stack",
  description:
    "Portfolio de RALANTOARISON Tatiannah, développeuse full-stack web, mobile et UI/UX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}