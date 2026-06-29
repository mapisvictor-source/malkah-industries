export default function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",

        background: "rgba(11, 15, 12, 0.85)",
        backdropFilter: "blur(10px)",

        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "999px",

        padding: "10px 16px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "30px",

        width: "min(600px, 90vw)",

        zIndex: 1000,
      }}
    >
      <h2
        style={{
          color: "#22c55e",
          fontSize: "1.2rem",
          fontWeight: "700",
          margin: 0,
          letterSpacing: "-1px",
          whiteSpace: "nowrap",
        }}
      >
        Malkah Industries
      </h2>

      <a
  href="https://wa.me/2348036326805?text=Hello%20Malkah%20Industries,%20I%20would%20like%20to%20request%20a%20quote."
  target="_blank"
  rel="noopener noreferrer"
        style={{
          background: "#22c55e",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          borderRadius: "999px",
          fontSize: "0.9rem",
          fontWeight: "600",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Request Quote
      </a>
    </div>
  );
}