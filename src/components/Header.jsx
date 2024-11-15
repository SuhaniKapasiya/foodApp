import React, { useState } from "react";
import {LOGO_URL} from "../utils/constants"
export const Header = () => {

  // if   btnNameReact  is const variable then on click how it value change to logout
  // because when  we click  over button setbtnNameReact it  re-render react componet
  //and when componet re-render it create new variable btnNameReact and this  btnNameReact value  is crated with updated value by setbtnNameReact
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header render");

  return (
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
