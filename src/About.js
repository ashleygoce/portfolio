import React, { useState } from "react";

export default function About({ darkMode }) {
  const backgroundColor = darkMode ? "#121212" : "#fff";
  const textColor = darkMode ? "#eee" : "#222";
  const secondaryTextColor = darkMode ? "#aaa" : "#555";
  const borderColor = darkMode ? "#444" : "#ccc";

  const [openSection, setOpenSection] = useState(null); // "adu" or "cycu" or null
  const [showCert, setShowCert] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModalImage = (imgName) => {
    setModalImage(imgName);
    setShowCert(false);
    setShowDiploma(false);
  };

  const closeModalImage = () => {
    setModalImage(null);
  };

  const openSectionModal = (section) => {
    setOpenSection(section);
    setShowCert(false);
    setShowDiploma(false);
    setModalImage(null);
  };

  const closeSectionModal = () => {
    setOpenSection(null);
    setShowCert(false);
    setShowDiploma(false);
    setModalImage(null);
  };

  // Content for ADU modal
const AduContent = (
  <div
    style={{
      color: secondaryTextColor,
      paddingTop: 15,
      paddingBottom: 15,
      maxHeight: "80vh",
      overflowY: "auto",
      paddingRight: 20,
      paddingLeft: 20,
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        color: textColor,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: 1.1,
        marginBottom: 20,
        userSelect: "none",
      }}
    >
      Adamson University - Bachelor of Science, Computer Engineering
    </h2>
    <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: 25 }}>
      ▪ Relevant Coursework: Computer Networks, Algorithms, Database Management Systems, Software Engineering
    </p>

    <div
      className="d-flex flex-wrap gap-3 justify-content-center mb-4"
      style={{ userSelect: "none" }}
    >
      {["adu1.png", "adu2.png"].map((img, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + `/${img}`}
          alt={`ADU project ${index + 1}`}
          className="rounded"
          style={{
            width: 300,
            height: 200,
            objectFit: "cover",
            boxShadow: darkMode
              ? "0 3px 10px rgba(255,255,255,0.2)"
              : "0 3px 10px rgba(0,0,0,0.15)",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          onClick={() => openModalImage(`/${img}`)}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ))}
    </div>

    <button
      onClick={() => setShowDiploma(true)}
      style={{
        padding: "10px 20px",
        borderRadius: 6,
        border: "none",
        backgroundColor: darkMode ? "#333" : "#007bff",
        color: darkMode ? "#eee" : "#fff",
        fontSize: "1rem",
        cursor: "pointer",
        userSelect: "none",
        boxShadow: darkMode
          ? "0 2px 6px rgba(255,255,255,0.1)"
          : "0 2px 6px rgba(0,0,0,0.2)",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = darkMode ? "#444" : "#0056b3")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = darkMode ? "#333" : "#007bff")}
    >
      View Diploma
    </button>

    {/* Diploma modal */}
    {showDiploma && (
      <div
        onClick={() => setShowDiploma(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          cursor: "pointer",
        }}
      >
        <div onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
          <button
            onClick={() => setShowDiploma(false)}
            style={{
              position: "absolute",
              top: -30,
              right: -30,
              backgroundColor: darkMode ? "#333" : "#007bff",
              border: "none",
              color: darkMode ? "#eee" : "#fff",
              fontSize: "1.5rem",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: "pointer",
              boxShadow: darkMode
                ? "0 2px 6px rgba(255,255,255,0.3)"
                : "0 2px 6px rgba(0,0,0,0.3)",
              userSelect: "none",
            }}
            aria-label="Close diploma modal"
          >
            ×
          </button>
          <img
            src={process.env.PUBLIC_URL + "/diploma.png"} // place your diploma image in public folder
            alt="Diploma"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 10,
              boxShadow: darkMode
                ? "0 0 20px rgba(255,255,255,0.3)"
                : "0 0 20px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </div>
    )}
  </div>
);


  // Content for CYCU modal
  const CycuContent = (
    <div
      style={{
        color: secondaryTextColor,
        paddingTop: 15,
        paddingBottom: 15,
        maxHeight: "80vh",
        overflowY: "auto",
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: "center",
        position: "relative",
        userSelect: "none",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: textColor,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        Chung Yuan Christian University - Taiwan (Student Researcher)
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: 20 }}>
        ▪ Relevant Coursework: Raspberry Pi, Linux, Python, Embedded Systems
        <br />
        ▪ Worked on a research project titled &quot;Advanced Remote Temperature Monitoring,&quot; designing a real-time monitoring system using Raspberry Pi and DS18B20 sensors. Developed Python scripts within a Linux environment to enable data collection, logging, and web-based remote access for temperature-critical applications.
      </p>

      <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
        {["cycu1.png", "cycu2.png", "cycu3.png", "cycu4.png"].map((img, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + `/${img}`}
            alt={`CYCU project ${index + 1}`}
            className="rounded"
            style={{
              width: 300,
              height: 200,
              objectFit: "cover",
              boxShadow: darkMode
                ? "0 3px 10px rgba(255,255,255,0.2)"
                : "0 3px 10px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => openModalImage(`/${img}`)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      <button
        onClick={() => setShowCert(true)}
        style={{
          padding: "10px 20px",
          borderRadius: 6,
          border: "none",
          backgroundColor: darkMode ? "#333" : "#007bff",
          color: darkMode ? "#eee" : "#fff",
          fontSize: "1rem",
          cursor: "pointer",
          userSelect: "none",
          boxShadow: darkMode
            ? "0 2px 6px rgba(255,255,255,0.1)"
            : "0 2px 6px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = darkMode ? "#444" : "#0056b3")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = darkMode ? "#333" : "#007bff")}
      >
        View Certificate
      </button>

      {/* Certificate modal */}
      {showCert && (
        <div
          onClick={() => setShowCert(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
            <button
              onClick={() => setShowCert(false)}
              style={{
                position: "absolute",
                top: -30,
                right: -30,
                backgroundColor: darkMode ? "#333" : "#007bff",
                border: "none",
                color: darkMode ? "#eee" : "#fff",
                fontSize: "1.5rem",
                borderRadius: "50%",
                width: 40,
                height: 40,
                cursor: "pointer",
                boxShadow: darkMode
                  ? "0 2px 6px rgba(255,255,255,0.3)"
                  : "0 2px 6px rgba(0,0,0,0.3)",
                userSelect: "none",
              }}
              aria-label="Close certificate modal"
            >
              ×
            </button>
            <img
              src={process.env.PUBLIC_URL + "/cert.png"}
              alt="Certificate"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: 10,
                boxShadow: darkMode
                  ? "0 0 20px rgba(255,255,255,0.3)"
                  : "0 0 20px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{
        maxWidth: 1500,
        margin: "40px auto",
        padding: 20,
        borderRadius: 10,
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor,
        color: textColor,
        lineHeight: 1.6,
        maxHeight: "75vh",
        overflowY: "auto",
      }}
    >
      <div style={{ paddingTop: 0, paddingLeft: 40 }}>
        <h2 style={{ marginBottom: 20, fontSize: "3rem" }}>About Me</h2>
        <p>
          I am a dedicated Computer Engineer from The Adamson University with a passion for
          software development and creating innovative solutions. I enjoy learning
          new technologies and applying them to real-world problems.
        </p>

        <h3 className="mt-5 mb-3">EDUCATION & INTERNSHIP</h3>

        <div
          className="d-flex align-items-start gap-5 mb-4"
style={{ display: "flex", alignItems: "center", gap: "80px" }}
        >
          {/* ADU Button */}
          <button
            className="btn d-flex align-items-center gap-3 p-2"
            onClick={() => openSectionModal("adu")}
            aria-expanded={openSection === "adu"}
            aria-controls="adu-info"
            style={{
              border: `1px solid ${borderColor}`,
              borderRadius: 10,
              backgroundColor,
              cursor: "pointer",
              boxShadow: darkMode
                ? "0 2px 8px rgba(255,255,255,0.15)"
                : "0 2px 8px rgba(0,0,0,0.15)",
              minWidth: 350,
              height: 110,
              textAlign: "left",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/adu.png"}
              alt="Adamson University"
              style={{ maxHeight: "80%", maxWidth: 170, objectFit: "contain" }}
            />
            <span
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                color: textColor,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                userSelect: "none",
                alignSelf: "center",
                lineHeight: 1.1,
                marginTop: -6,
              }}
            >
              Adamson University
            </span>
          </button>

          {/* CYCU Button */}
          <button
            className="btn d-flex align-items-center gap-3 p-2"
            onClick={() => openSectionModal("cycu")}
            aria-expanded={openSection === "cycu"}
            aria-controls="cycu-info"
            style={{
              border: `1px solid ${borderColor}`,
              borderRadius: 10,
              backgroundColor,
              cursor: "pointer",
              boxShadow: darkMode
                ? "0 2px 8px rgba(255,255,255,0.15)"
                : "0 2px 8px rgba(0,0,0,0.15)",
              minWidth: 350,
              height: 110,
              textAlign: "left",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/cyculogo.png"}
              alt="Chung Yuan Christian University"
              style={{ maxHeight: "80%", maxWidth: 170, objectFit: "contain" }}
            />
            <span
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                color: textColor,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                userSelect: "none",
                alignSelf: "center",
                lineHeight: 1.1,
                marginTop: -6,
              }}
            >
              Chung Yuan Christian University
            </span>
          </button>
        </div>

        {/* MODAL for ADU and CYCU content */}
        {openSection && (
          <div
            onClick={closeSectionModal}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              cursor: "pointer",
              padding: 20,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor,
                borderRadius: 15,
                maxWidth: "90vw",
                width: 900,
                maxHeight: "90vh",
                overflowY: "auto",
                boxShadow: darkMode
                  ? "0 0 40px rgba(255,255,255,0.2)"
                  : "0 0 40px rgba(0,0,0,0.2)",
                padding: 20,
                position: "relative",
              }}
            >
              <button
                onClick={closeSectionModal}
                style={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  backgroundColor: darkMode ? "#333" : "#007bff",
                  border: "none",
                  color: darkMode ? "#eee" : "#fff",
                  fontSize: "1.5rem",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                  boxShadow: darkMode
                    ? "0 2px 6px rgba(255,255,255,0.3)"
                    : "0 2px 6px rgba(0,0,0,0.3)",
                  userSelect: "none",
                }}
                aria-label="Close modal"
              >
                ×
              </button>
              {openSection === "adu" && AduContent}
              {openSection === "cycu" && CycuContent}
            </div>
          </div>
        )}

        {/* Modal for images (adu, cycu projects, extracurricular, certificate, diploma) */}
        {modalImage && (
          <div
            onClick={closeModalImage}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10000,
              cursor: "pointer",
              padding: 20,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
            >
              <button
                onClick={closeModalImage}
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  backgroundColor: darkMode ? "#333" : "#007bff",
                  border: "none",
                  color: darkMode ? "#eee" : "#fff",
                  fontSize: "1.5rem",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                  boxShadow: darkMode
                    ? "0 2px 6px rgba(255,255,255,0.3)"
                    : "0 2px 6px rgba(0,0,0,0.3)",
                  userSelect: "none",
                }}
                aria-label="Close image modal"
              >
                ×
              </button>
              <img
                src={modalImage}
                alt="Enlarged"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  borderRadius: 10,
                  boxShadow: darkMode
                    ? "0 0 20px rgba(255,255,255,0.3)"
                    : "0 0 20px rgba(0,0,0,0.3)",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        )}

  <h3 className="mt-5 mb-3">EXTRACURRICULAR INVOLVEMENT</h3>
<ul 
  className="ps-3" 
  style={{ color: darkMode ? textColor : "#222", listStyleType: "disc" }}
>
  <li className="mb-2">Adamson University Computer Engineering Society (ACOES)</li>
  <li className="mb-2">Institute of Computer Engineers of the Philippines - student edition (ICpEP.se)</li>
  <li>
    Adamson University Mathematics Society
    <ul 
      className="mt-2 ps-4" 
      style={{ color: darkMode ? textColor : "#222", listStyleType: "circle" }}
    >
      <li className="mb-1">Outreach Directress (2022 - 2023)</li>
      <li>Vice President - External (2023 - 2024)</li>
    </ul>
  </li>
</ul>

        {/* Extracurricular images horizontally aligned and centered */}
        <div
          className="d-flex gap-3 mt-4 ps-3 justify-content-center"
          style={{ userSelect: "none" }}
        >
          {["x1.png", "x2.png", "x3.png"].map((img, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + `/${img}`}
              alt={`Extracurricular ${index + 1}`}
              className="rounded"
              style={{
                width: 450,
                height: 300,
                objectFit: "cover",
                boxShadow: darkMode
                  ? "0 3px 10px rgba(255,255,255,0.2)"
                  : "0 3px 10px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => openModalImage(`/${img}`)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
