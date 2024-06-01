import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#ff4d4d", padding: "10px" }}>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            🏠 Home
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            style={{ color: "white", textDecoration: "none" }}
          >
            📔 Contacto
          </Link>
        </li>
        <li style={{ marginLeft: "auto" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Happy Cake 🍰
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
