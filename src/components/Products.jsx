import { useEffect, useState } from "react";

import cardBg1 from "../assets/card-background-1.png";
import cardBg2 from "../assets/card-background-2.png";
import cardBg3 from "../assets/card-background-3.png";
import cardBg4 from "../assets/card-background-4.png";

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  const products = [
    {
      code: "MKH-01",
      family: "NPK",
      name: "15-15-15",
      subtitle: "Balanced Formula",
      applications: "Maize • Rice • Vegetables",
      availability: "Nationwide Distribution",
      description:
        "A balanced fertilizer blend engineered to support healthy development across multiple crop categories.",
      image: cardBg1,
      rotate: "-5deg",
      left: "40px",
    },
    {
      code: "MKH-02",
      family: "NPK",
      name: "20-10-10",
      subtitle: "Growth Focused",
      applications: "Cereals • Tubers • Cash Crops",
      availability: "Bulk Orders Available",
      description:
        "Designed to support vigorous vegetative growth and improved crop establishment.",
      image: cardBg2,
      rotate: "-2deg",
      left: "160px",
    },
    {
      code: "MKH-03",
      family: "NPK",
      name: "27-13-13",
      subtitle: "Yield Optimized",
      applications: "Commercial Agriculture",
      availability: "Wholesale Ready",
      description:
        "Engineered for stronger yields and consistent performance across demanding agricultural environments.",
      image: cardBg3,
      rotate: "2deg",
      left: "280px",
    },
    {
      code: "MKH-04",
      family: "UREA",
      name: "46%",
      subtitle: "Nitrogen Rich",
      applications: "Large Scale Farming",
      availability: "Nationwide Supply",
      description:
        "High nitrogen concentration designed for rapid plant development and productivity.",
      image: cardBg4,
      rotate: "5deg",
      left: "400px",
    },
  ];

  const active = products[activeProduct];

  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom,#131b15 0%,#171d18 100%)",
        padding: "120px 0",
        overflow: "hidden",
        color: "#f3f4f3",
      }}
    >
      <div
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "90px",
          }}
        >
          <div
            style={{
              letterSpacing: "5px",
              fontSize: ".82rem",
              color: "#22c55e",
              marginBottom: "18px",
              fontWeight: 700,
            }}
          >
            PRODUCT RANGE
          </div>

          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              margin: 0,
              color: "#f7f8f7",
            }}
          >
            Engineered for Growth
          </h2>
        </div>

        {/* Staircase Deck */}

        <div
  style={{
    position: "relative",
    height: "530px",
    width: "700px",
    margin: "0 auto 100px auto",
  }}
>
          {products.map((product, index) => (
            <div
              key={index}
              onMouseEnter={() =>
                canHover && setActiveProduct(index)
              }
              onClick={() =>
                !canHover && setActiveProduct(index)
              }
              style={{
                position: "absolute",
                width: "260px",
                height: "390px",

                left: product.left,
                top: `${index * 12}px`,

                borderRadius: "28px",
                overflow: "hidden",

                background:
                  activeProduct === index
                    ? "#262b28"
                    : "#1d2120",

                border:
                  activeProduct === index
                    ? "1px solid rgba(34,197,94,.28)"
                    : "1px solid rgba(255,255,255,.06)",

                transform:
                  activeProduct === index
                    ? "translateY(-18px) rotate(0deg)"
                    : `rotate(${product.rotate})`,

                boxShadow:
                  activeProduct === index
                    ? `
                    0 25px 60px rgba(0,0,0,.45),
                    0 0 20px rgba(34,197,94,.08)
                  `
                    : "0 15px 35px rgba(0,0,0,.3)",

                transition: ".35s ease",
                cursor: "pointer",

                zIndex:
                  activeProduct === index
                    ? 100
                    : index,
              }}
            >
              {/* Background Image */}

              <img
  src={product.image}
  alt={product.name}
  style={{
    position: "absolute",
    inset: 0,

    width: "100%",
    height: "100%",

    objectFit: "contain",
    objectPosition: "center bottom",

    opacity:
      activeProduct === index
        ? 0.38
        : 0.24,

    transform:
      activeProduct === index
        ? "scale(1.03)"
        : "scale(1)",

    transition: ".35s ease",

    pointerEvents: "none",
  }}
/>

              {/* Content */}

              <div
                style={{
                  position: "relative",
                  height: "100%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  zIndex: 2,
                }}
              >
                {/* Top */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      letterSpacing: "3px",
                      fontSize: ".8rem",
                      opacity: 0.7,
                    }}
                  >
                    {product.family}
                  </span>

                  <span
                    style={{
                      color: "#22c55e",
                      fontSize: ".78rem",
                      letterSpacing: "2px",
                    }}
                  >
                    {product.code}
                  </span>
                </div>

                {/* Bottom */}

                <div>
                  <h3
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: "8px",
                      fontWeight: 800,
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      opacity: 0.72,
                      marginBottom: "22px",
                    }}
                  >
                    {product.subtitle}
                  </p>

                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      background: "#22c55e",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Product */}

        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#22c55e",
              letterSpacing: "4px",
              marginBottom: "20px",
              fontSize: ".85rem",
            }}
          >
            ACTIVE PRODUCT
          </div>

          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            {active.family} {active.name}
          </h2>

          <p
            style={{
              opacity: 0.72,
              lineHeight: 1.9,
              marginBottom: "40px",
            }}
          >
            {active.description}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  color: "#22c55e",
                  marginBottom: "10px",
                  letterSpacing: "2px",
                }}
              >
                APPLICATIONS
              </div>

              <div>{active.applications}</div>
            </div>

            <div>
              <div
                style={{
                  color: "#22c55e",
                  marginBottom: "10px",
                  letterSpacing: "2px",
                }}
              >
                AVAILABILITY
              </div>

              <div>{active.availability}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}