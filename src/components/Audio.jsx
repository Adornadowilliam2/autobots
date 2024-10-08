import React from "react";
import whative from "../assets/music/whativedone.mp3";
export default function Audio() {
  return <audio src={whative} autoPlay loop />;
}
