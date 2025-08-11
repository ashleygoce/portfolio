import React from "react";

export default function Skills({ darkMode }) {
  const backgroundColor = darkMode ? "#121212" : "#fff";
  const textColor = darkMode ? "#eee" : "#222";
  const borderColor = darkMode ? "#444" : "#ccc";
  const secondaryTextColor = darkMode ? "#aaa" : "#555";

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto 80px",
        padding: 20,
        border: `1px solid ${borderColor}`,
        borderRadius: 10,
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor,
        color: textColor,
        lineHeight: 1.6,
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Skills</h2>
      <ul style={{ color: secondaryTextColor }}>
        <li>JavaScript / React.js</li>
        <li>HTML / CSS</li>
        <li>Node.js / Express</li>
        <li>Python</li>
        <li>Git / GitHub</li>
        <li>Problem Solving</li>
        <li>Responsive Web Design</li>
      </ul>
    </div>
  );
}
