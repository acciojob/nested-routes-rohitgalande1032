import React from "react";
import { Link, Outlet } from "react-router-dom";

const Women = () => {
  return (
    <div>
      <p>Women Items: </p>
      <nav>
      <ul>
        <li>
          <Link to="Grooming">Grooming</Link>
        </li>
        <li>
          <Link to="Shirt">Shirt</Link>
        </li>
        <li>
          <Link to="Trouser">Trouser</Link>
        </li>
        <li>
          <Link to="Jewellery">Jewellery</Link>
        </li>
      </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Women;
