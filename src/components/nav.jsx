import React from "react";
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <div className="navbar">
      <ul>
        <Link className="btn-primary" to="/blue">
          Blue
        </Link>
        <Link className="btn-primary" to="/red">
          Red
        </Link>
        <Link className="btn-primary" to="/">
          Home
        </Link>
      </ul>
    </div>
  );
}
