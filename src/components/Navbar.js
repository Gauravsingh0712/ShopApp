import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img
              src="https://img.freepik.com/free-vector/flat-design-library-logo-template_23-2149325328.jpg?w=740&t=st=1710867533~exp=1710868133~hmac=25b2af8c83d5dbfbb8e6e772c979e0d3ef847c99d3e1fa1919773646889e5ecb"
              width={60}
              height={60}
            />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
