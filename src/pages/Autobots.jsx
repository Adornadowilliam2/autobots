import React from "react";
import { data } from "../index";
import { Link } from "react-router-dom";

export default function Autobots() {
  return (
    <>
      <h1>AutoBots</h1>
      <div className="card-list">
        {data.map((item) => (
          <Link to={`/${item.name.toLowerCase()}`} key={item.id}>
            <div className="card">
              <img src={item.photo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
