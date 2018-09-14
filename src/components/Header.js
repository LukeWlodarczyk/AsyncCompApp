import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/hello">Hello</Link>
    </li>
    <li>
      <Link to="/world">World</Link>
    </li>
  </ul>
);

export default Header;
