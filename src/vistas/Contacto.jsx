import React from "react";

function Contacto() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
      <form style={{ display: "inline-block", textAlign: "center" }}>
        <div
          style={{ marginBottom: "50px", textAlign: "center", padding: "10px" }}
        >
          <label className="correo" htmlFor="email">
            Correo:
          </label>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              style={{ width: "500px" }}
            />
          </div>
        </div>
        <div style={{ marginBottom: "50px", padding: "10px" }}>
          <label className="descripcion" htmlFor="description">
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            style={{ display: "block", width: "500px" }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            padding: "10px 20px",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacto;
