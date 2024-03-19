import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/singup");
  };
  return (
    <div>
      <img
        alt="logo"
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGpRFpYqhFJu-5NptX3FVING6T_8hYw1dPHBvXxR19qkbeIMB9t1gj_vDMl5Y2hbAqyU&usqp=CAU"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {" "}
            <Link onClick={logout} to="/singup">
              ( {JSON.parse(auth).name}) Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/singup">Sing Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
