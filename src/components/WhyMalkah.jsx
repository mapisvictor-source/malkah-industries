import { useState } from "react";
import bagImage from "../assets/Fertilizer-bag.png";

import {
  FiGlobe,
  FiTruck,
  FiShield,
} from "react-icons/fi";

import { GiFertilizerBag } from "react-icons/gi";

export default function WhyMalkah() {
  const [activeCard, setActiveCard] = useState(0);

  const reasons = [
    {
      code: "MKH-01",
      status: "ACTIVE",
      metric: "Coverage: Nationwide",
      icon: <FiGlobe size={110} />,
      title: "NATIONWIDE SUPPLY",
      desc: "Reliable fertilizer distribution across Nigeria."
    },
    {
      code: "MKH-02",
      status: "VERIFIED",
      metric: "Blend: Premium",
      icon: <GiFertilizerBag size={110} />,
      title: "PREMIUM QUALITY",
      desc: "Carefully formulated blends engineered for stronger yields."
    },
    {
      code: "MKH-03",
      status: "READY",
      metric: "Capacity: Bulk",
      icon: <FiTruck size={110} />,
      title: "EFFICIENT DELIVERY",
      desc: "Bulk logistics built for farms and distributors nationwide."
    },
    {
      code: "MKH-04",
      status: "ESTABLISHED",
      metric: "Partnership: Long-Term",
      icon: <FiShield size={110} />,
      title: "TRUSTED PARTNERSHIP",
      desc: "Built on consistency, reliability and lasting relationships."
    }
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom,#0b120d 0%,#101712 55%,#131b15 100%)",
        color: "white",
        padding: "0 0 120px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Pellet constellation atmosphere */}
      

      {/* Divider */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        <div
          style={{
            width: "92%",
            height: "1px",
            background:
              "linear-gradient(to right,transparent,rgba(34,197,94,.25),transparent)",
            boxShadow: "0 0 15px rgba(34,197,94,.15)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "100px 40px 0",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            padding: "40px",
            borderRadius: "40px",
            background:
              "radial-gradient(circle, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 85%)",
            marginBottom: "10px"
          }}
        >
          <img
            src={bagImage}
            alt="Fertilizer Bag"
            style={{
              width: "340px",
              maxWidth: "90%",
              objectFit: "contain",
              filter:
                "drop-shadow(0 0px 60px rgba(34,197,94,.18)) brightness(1.05)",
              display: "block"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            width: "100%",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: "240px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(34,197,94,.25))",
            }}
          />

          <span
            style={{
              fontSize: "1rem",
              letterSpacing: "4px",
              fontWeight: 700,
              color: "#d8e7db",
              whiteSpace: "nowrap",
              padding: "0 12px"
            }}
          >
            WHY MALKAH INDUSTRIES
          </span>

          <div
            style={{
              flex: 1,
              maxWidth: "240px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(34,197,94,.25))",
            }}
          />
        </div>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 80px",
            opacity: 0.72,
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          Built for scale. Engineered for reliability. Trusted by farms,
          distributors and agricultural partners nationwide.
        </p>

        <div
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            paddingBottom: "20px",
            scrollbarWidth: "thin",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              width: "max-content",
              padding: "10px 0",
            }}
          >
            {reasons.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
                style={{
                  width: "370px",
                  height: "250px",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                  background:
                    activeCard === index
                      ? "rgba(18,25,20,.88)"
                      : "rgba(18,25,20,.72)",
                  border:
                    activeCard === index
                      ? "1px solid rgba(34,197,94,.35)"
                      : "1px solid rgba(255,255,255,.08)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  padding: "28px",
                  transition: ".35s ease",
                  boxShadow:
                    activeCard === index
                      ? `0 0 35px rgba(34,197,94,.12),
                         inset 0 0 25px rgba(34,197,94,.05)`
                      : "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: "-10px",
                    bottom: "-10px",
                    opacity: activeCard === index ? 0.09 : 0.04,
                    color: "#22c55e",
                    transition: ".35s ease",
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "35px",
                  }}
                >
                  <span
                    style={{
                      color: "#22c55e",
                      letterSpacing: "3px",
                      fontWeight: 700,
                      fontSize: ".85rem",
                    }}
                  >
                    {item.code}
                  </span>

                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: ".8rem",
                      opacity: .75,
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#22c55e",
                        boxShadow:
                          activeCard === index
                            ? "0 0 12px #22c55e"
                            : "none",
                      }}
                    />
                    {item.status}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.45rem",
                    marginBottom: "18px",
                    maxWidth: "220px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    opacity: .72,
                    lineHeight: 1.8,
                    maxWidth: "240px",
                    marginBottom: "24px",
                  }}
                >
                  {item.desc}
                </p>

                <div
                  style={{
                    fontSize: ".82rem",
                    letterSpacing: "1px",
                    color: "#22c55e",
                    opacity: .85,
                  }}
                >
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}