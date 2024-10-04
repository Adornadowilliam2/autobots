import React from "react";
import { Link } from "react-router-dom";
import { data } from "../index";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <h1>Autobots</h1>
        </Link>
        <ul>
          {data.map((item) => (
            <Link
              to={`/${item.name.toLowerCase()}`}
              key={item.id}
              className="navbar-child"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
