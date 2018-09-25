import React from "react";
import { Link } from "react-router-dom";

const Header = ({ preloadHome, preloadHello, preloadWorld }) => (
  <ul>
    <li>
      <Link to="/" onMouseOver={preloadHome}>Home</Link>
    </li>
    <li>
      <Link to="/hello" onMouseOver={preloadHello}>Hello</Link>
    </li>
    <li>
      <Link to="/world" onMouseOver={preloadWorld}>World</Link>
    </li>
  </ul>
);

export default Header;
