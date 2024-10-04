import React from "react";
import { data } from "../index.js";
import Navbar from "../components/Navbar.jsx";

export default function Optimus() {
  return (
    <>
      <Navbar />
      <div>
        <img src={data[0].image} alt={data[0].name} />
      </div>
      <h1>{data[0].name + " Prime"}</h1>
      <img src={data[0].altmode} alt="altmode" width="100%" />
      <p>{data[0].description}</p>
      <a href={data[0].link}>Wikipedia</a>
    </>
  );
}
