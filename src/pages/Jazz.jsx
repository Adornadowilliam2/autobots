import React from "react";
import { data } from "../index";
import Navbar from "../components/Navbar";

export default function Jazz() {
  return (
    <>
      <Navbar />
      <div>
        <img src={data[4].image} alt={data[4].name} />
      </div>
      <h1>{data[4].name}</h1>
      <img src={data[4].altmode} alt="altmode" width="100%" />
      <p>{data[4].description}</p>
      <a href={data[4].link}>Wikipedia</a>
    </>
  );
}
