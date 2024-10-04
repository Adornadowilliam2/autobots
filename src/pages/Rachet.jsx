import React from "react";
import { data } from "../index";
import Navbar from "../components/Navbar";

export default function Rachet() {
  return (
    <>
      <Navbar />
      <div>
        <img src={data[2].image} alt={data[2].name} />
      </div>
      <h1>{data[2].name}</h1>
      <img src={data[2].altmode} alt="altmode" width="100%" />
      <p>{data[2].description}</p>
      <a href={data[2].link}>Wikipedia</a>
    </>
  );
}
