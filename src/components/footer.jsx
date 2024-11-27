import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div className="footer">
      <Link className="btn-primary" to="/blue">
        Blue
      </Link>
      <Link className="btn-primary" to="/red">
        Red
      </Link>
      <Link className="btn-primary" to="/">
        Home
      </Link>
      <Link className="btn-primary" to="/aboutme">
        About Me
      </Link>
      <Link className="btn-primary" to="/projects">
        Projects
      </Link>
    </div>
  );
}
