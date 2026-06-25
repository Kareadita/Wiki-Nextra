import { useState } from "react";

export function KavitaPlusBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wiki.kavitareader.com/kavita+/"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        marginLeft: "0.5rem",
        padding: "0.2em 0.5em",
        fontSize: "0.45em",
        borderRadius: "4px",
        border: `1px solid ${hovered ? "#FFA500" : "#FFD700"}`,
        background: hovered
          ? "linear-gradient(135deg, #FFA500, #FFD700)"
          : "linear-gradient(135deg, #FFD700, #FFA500)",
        color: "#000",
        textDecoration: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        transition: "all 0.3s ease",
        fontWeight: 600,
      }}
    >
      Kavita+
    </a>
  );
}
