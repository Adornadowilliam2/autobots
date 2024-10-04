import React from "react";
import { data } from "../index";
import Navbar from "../components/Navbar";

export default function IronHide() {
  return (
    <>
      <Navbar />
      <main>
        <img src={data[3].image} alt={data[3].name} />
      </main>
      <h1>{data[3].name}</h1>
      <img src={data[3].altmode} alt="altmode" width="100%" />
      <p>{data[3].description}</p>
      <a href={data[3].link}>Wikipedia</a>
    </>
  );
}
