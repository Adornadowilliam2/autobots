import React from "react";
import { data } from "../index";
import Navbar from "../components/Navbar";

export default function BumbleBee() {
  return (
    <>
      <Navbar />
      <main>
        <img
          src={data[1].image}
          alt={data[1].name}
          style={{ filter: "drop-shadow(10px 10px 0 " + data[1].color + ")" }}
        />
      </main>
      <h1>{data[1].name}</h1>
      <img src={data[1].altmode} alt="altmode" width="100%" />
      <p>{data[1].description}</p>
      <a href={data[1].link}>Wikipedia</a>
    </>
  );
}
