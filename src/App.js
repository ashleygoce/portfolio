import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import About from "./About";
import Skills from "./Skills";

function Home({ darkMode }) {
  const handleDownload = () => {
    fetch(process.env.PUBLIC_URL + "/resume.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert("Failed to download file."));
  };

  const backgroundColor = darkMode ? "#121212" : "#fff";
  const textColor = darkMode ? "#eee" : "#222";
  const secondaryTextColor = darkMode ? "#aaa" : "#666";
  const buttonBgPrimary = "#0a66c2";
  const buttonBgSuccess = darkMode ? "#1e7e34" : "#28a745";

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: 20,
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor,
        color: textColor,
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left side: Big image */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <img
            src={process.env.PUBLIC_URL + "/grad.png"}
            alt="Graduation"
            style={{
              width: "100%", // make it full width of container
              maxWidth: 400,
              height: "auto",
              borderRadius: 0,
              boxShadow: darkMode
                ? "0 4px 12px rgba(255,255,255,0.2)"
                : "0 4px 12px rgba(0,0,0,0.1)",
              transition: "box-shadow 0.3s ease",
            }}
          />
        </div>

        {/* Right side: Name, title, and projects + buttons */}
        <div style={{ flex: 1, minWidth: 300, display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 30 }}>
            <h1 style={{ marginBottom: 5 }}>
              Ashley Denise Goce
            </h1>
            <h3 style={{ marginTop: 0, color: secondaryTextColor }}>
              Computer Engineer, Adamson University
            </h3>
          </div>

          {/* Vercel projects side by side */}
          <div
            style={{
              display: "flex",
              gap: 40,
              flexWrap: "nowrap",  // no wrap to keep side by side
              justifyContent: "flex-start",
              marginBottom: 30,
            }}
          >
            {/* Vercel 1 */}
            <div style={{ textAlign: "center", cursor: "pointer" }}>
              <img
                src={process.env.PUBLIC_URL + "/vercel2.png"}
                alt="Inventory Project"
                style={{
                  width: 200,
                  borderRadius: 10,
                  boxShadow: darkMode
                    ? "0 2px 6px rgba(255,255,255,0.2)"
                    : "0 2px 6px rgba(0,0,0,0.15)",
                  marginBottom: 8,
                  transition: "box-shadow 0.3s ease",
                }}
                onClick={() =>
                  window.open(
                    "https://inventory-front-end-vwoz.vercel.app/index.html",
                    "_blank"
                  )
                }
              />
              <div style={{ fontWeight: "bold", color: textColor }}>
                Product Inventory (Frontend)
              </div>
            </div>

            {/* Vercel 2 */}
            <div style={{ textAlign: "center", cursor: "pointer" }}>
              <img
                src={process.env.PUBLIC_URL + "/vercel1.png"}
                alt="Ride Safe Project"
                style={{
                  width: 200,
                  borderRadius: 10,
                  boxShadow: darkMode
                    ? "0 2px 6px rgba(255,255,255,0.2)"
                    : "0 2px 6px rgba(0,0,0,0.15)",
                  marginBottom: 8,
                  transition: "box-shadow 0.3s ease",
                }}
                onClick={() =>
                  window.open("https://ride-safe.vercel.app/login", "_blank")
                }
              />
              <div style={{ fontWeight: "bold", color: textColor }}>RideSafe</div>
            </div>
          </div>

          {/* Buttons below vercel */}
          <div style={{ display: "flex", gap: 20 }}>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ashley-denise-goce-862b4a375/",
                  "_blank"
                )
              }
              style={{
                cursor: "pointer",
                backgroundColor: buttonBgPrimary,
                color: "white",
                border: "none",
                padding: "10px 20px",
                fontSize: 16,
                borderRadius: 5,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "background-color 0.3s ease",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/linkedin.png"}
                alt="LinkedIn"
                style={{ height: 24 }}
              />
              LinkedIn Profile
            </button>

            <button
              onClick={handleDownload}
              style={{
                cursor: "pointer",
                backgroundColor: buttonBgSuccess,
                color: "white",
                border: "none",
                padding: "10px 20px",
                fontSize: 16,
                borderRadius: 5,
                transition: "background-color 0.3s ease",
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const backgroundColor = darkMode ? "#121212" : "#fff";
  const navBg = darkMode ? "#222" : "#f8f8f8";
  const navTextColor = darkMode ? "#eee" : "#222";

  return (
    <Router>
      {/* Whole page background */}
      <div
        style={{
          backgroundColor,
          minHeight: "100vh",
          transition: "background-color 0.3s ease",
          paddingTop: 10, // to avoid content under fixed nav
        }}
      >
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: navBg,
            color: navTextColor,
            padding: "10px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: darkMode
              ? "0 2px 5px rgba(0,0,0,0.8)"
              : "0 2px 5px rgba(0,0,0,0.1)",
            zIndex: 10000,
            fontWeight: "bold",
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <div style={{ display: "flex", gap: 25, fontSize: 16 }}>
            <Link to="/" style={navLinkStyle(navTextColor)}>
              Home
            </Link>
            <Link to="/about" style={navLinkStyle(navTextColor)}>
              About
            </Link>
            <Link to="/skills" style={navLinkStyle(navTextColor)}>
              Skills
            </Link>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              cursor: "pointer",
              backgroundColor: darkMode ? "#eee" : "#222",
              color: darkMode ? "#222" : "#eee",
              border: "none",
              padding: "6px 12px",
              borderRadius: 5,
              fontSize: 14,
            }}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

const navLinkStyle = (color) => ({
  color,
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer",
});

export default App;
