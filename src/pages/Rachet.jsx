import React from "react";
import { data } from "../index";
import Navbar from "../components/Navbar";

export default function Rachet() {
  return (
    <>
      <Navbar data={data} />
      <main>
        <img
          src={data[2].image}
          alt={data[2].name}
          style={{ filter: "drop-shadow(10px 10px 0 " + data[2].color + ")" }}
        />
      </main>
      <h1>{data[2].name}</h1>
      <img src={data[2].altmode} alt="altmode" width="100%" />
      <p>{data[2].description}</p>
      <a
        href={data[2].link}
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
