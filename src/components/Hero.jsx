import heroImage from "../assets/bg-hero.jpeg";
import { useEffect, useState } from "react";

export default function Hero() {
  const text =
    "Leading wholesale supplier of premium fertilizers across Nigeria, delivering agricultural inputs for high yield farming.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "180px",
        paddingBottom: "140px",
        paddingLeft: "40px",
        paddingRight: "40px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "18px",

        textAlign: "center",
        background: "#0f1511",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating background image */}
      <img
        src={heroImage}
        alt=""
        style={{
          position: "absolute",
          height: "650px",
          width: "auto",
          opacity: 0.12,
          top: "58%",
          right: "-140px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          filter: "grayscale(20%)",
          zIndex: 0,
          animation: "floatSlow 8s ease-in-out infinite",
        }}
      />

      {/* Title */}
      <h1
        style={{
          fontSize: "4.2rem",
          fontWeight: "800",
          letterSpacing: "-2px",
          lineHeight: "1.05",
          margin: 0,
          zIndex: 1,
          position: "relative",
        }}
      >
        Malkah{" "}
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: "#22c55e",
          }}
        >
          I
        </span>
        ndustries
      </h1>

      {/* Typewriter text */}
      <p
        style={{
          fontSize: "1.1rem",
          opacity: 0.75,
          maxWidth: "720px",
          lineHeight: "1.8",
          fontFamily: "JetBrains Mono, monospace",
          margin: 0,
          zIndex: 1,
          position: "relative",
        }}
      >
        {displayedText}
        <span
          style={{
            color: "#22c55e",
            fontWeight: "bold",
            animation: "blink 1s infinite",
          }}
        >
          |
        </span>
      </p>

      {/* CTA */}
      <button
        style={{
          background: "transparent",
          color: "#22c55e",
          border: "1.5px solid rgba(34, 197, 94, 0.6)",
          padding: "12px 22px",
          borderRadius: "999px",
          fontSize: "0.95rem",
          fontWeight: "600",
          cursor: "pointer",
          zIndex: 1,
          position: "relative",
        }}
      >
        Partner With Us
      </button>
    </section>
  );
}