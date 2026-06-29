import {
  FiPhone,
  FiMail,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to bottom,#131b15 0%,#0c100d 45%,#070908 100%)",
        color: "white",
        padding: "120px 20px 50px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Divider */}
      <div
        style={{
          width: "92%",
          height: "1px",
          margin: "0 auto 70px",
          background:
            "linear-gradient(to right, transparent, rgba(34,197,94,.25), transparent)",
        }}
      />

      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          letterSpacing: "3px",
          marginBottom: "20px",
          fontWeight: 800,
        }}
      >
        BUILT FOR YIELDS.
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "650px",
          margin: "0 auto 60px",
          lineHeight: 1.9,
          opacity: .72,
          fontSize: "1.05rem",
        }}
      >
        Trusted agricultural supply for farms,
        distributors and partners nationwide.
      </p>

      {/* WhatsApp CTA */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "45px",
        }}
      >
        <a
          href="https://wa.me/2348036326805?text=Hello%20Malkah%20Industries,%20I'd%20like%20to%20make%20an%20enquiry%20about%20your%20fertilizer%20products."
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",

        background: "rgba(8,10,9,.95)",
border: "1px solid rgba(255,255,255,.08)",

            padding: "18px 34px",
            borderRadius: "999px",

            color: "white",

            transition: ".3s ease",

            boxShadow: "0 12px 35px rgba(0,0,0,.35)",
          }}
        >
          <FaWhatsapp size={24} color="#22c55e" />

          <span
            style={{
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            WhatsApp Us For Pricing
          </span>
        </a>
      </div>

      {/* Contact Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "70px",
          opacity: .75,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FiPhone size={18} />
          <span>+234 803 632 6805</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FiMail size={18} />
          <span>hello@malkahindustries.com</span>
        </div>
      </div>

      {/* Signature Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "1px",
            background:
              "rgba(255,255,255,.08)",
          }}
        />

        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />

        <div
          style={{
            width: "90px",
            height: "1px",
            background:
              "rgba(255,255,255,.08)",
          }}
        />
      </div>

      {/* Brand Signature */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            letterSpacing: "6px",
            fontWeight: 700,
            marginBottom: "14px",
            fontSize: ".95rem",
          }}
        >
          MALKAH INDUSTRIES
        </div>

        <div
          style={{
            opacity: .5,
            fontSize: ".9rem",
          }}
        >
          Agricultural Inputs • Nigeria
        </div>

        <div
          style={{
            marginTop: "24px",
            opacity: .35,
            fontSize: ".82rem",
          }}
        >
          © 2026 Malkah Industries
        </div>
      </div>
    </footer>
  );
}