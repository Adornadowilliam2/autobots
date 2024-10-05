import React from "react";
import { data } from "../index.js";
import Navbar from "../components/Navbar.jsx";

export default function Optimus() {
  return (
    <>
      <Navbar data={data} />
      <main>
        <img
          src={data[0].image}
          alt={data[0].name}
          style={{ filter: "drop-shadow(10px 10px 0 " + data[0].color + ")" }}
        />
      </main>
      <h1>{data[0].name + " Prime"}</h1>
      <img src={data[0].altmode} alt="altmode" width="100%" />
      <p>{data[0].description}</p>
      <a
        href={data[0].link}
        target="_blank"
        style={{
          textAlign: "center",
          textDecoration: "none",
          color: "#2c2c2c",
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "20px",
          display: "block",

          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <span>Wikipedia</span>
      </a>
    </>
  );
}
