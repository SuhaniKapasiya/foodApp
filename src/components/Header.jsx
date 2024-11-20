import React, { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
export const Header = () => {


  // if   btnNameReact  is const variable then on click how it value change to logout
  // because when  we click  over button setbtnNameReact it  re-render react componet
  //and when componet re-render it create new variable btnNameReact and this  btnNameReact value  is crated with updated value by setbtnNameReact
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header render");

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
