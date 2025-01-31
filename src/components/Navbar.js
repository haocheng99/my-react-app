import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "10px 20px",
        backgroundColor: "#1a1a1a",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* 网站标题 */}
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#FFD700" }}>
        Vocadian
      </h2>
      {/* 导航菜单 */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: "0",
          padding: "0",
        }}
      >
        <li>
          <a
            href="#home"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#FFD700")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#FFD700")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#FFD700")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
