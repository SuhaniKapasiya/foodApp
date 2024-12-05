import React, {useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  // if   btnNameReact  is const variable then on click how it value change to logout
  // because when  we click  over button setbtnNameReact it  re-render react componet
  //and when componet re-render it create new variable btnNameReact and this  btnNameReact value  is crated with updated value by setbtnNameReact
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems ---->", cartItems);
  

  console.log("Header render");

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg mt-2 mb-2 h-20 items-center">
      <div className="Logo-container">
        <img className="Logo w-20 " src={LOGO_URL} />
      </div>
      <div className="nav-item   justify-center items-center ">
        <ul className="flex p-4 m-3">
          <li className="px-2">Online Status {onlineStatus ? "✅" : "🔴 "}</li>
          <li className="px-2 text-blue-800 hover:text-blue-950 underline">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 text-blue-800 hover:text-blue-950 underline">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 text-blue-800 hover:text-blue-950 underline">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-2 text-blue-800 hover:text-blue-950 underline">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2  text-blue-800 hover:text-blue-950 underline">
            <Link to="/cart">Cart-({cartItems?.length || 0} item)</Link>
          </li>
          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-red-400 rounded-md "
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
                console.log(btnNameReact);
              }}
            >
              {btnNameReact}
            </button>
          </div>

          <li className="font-bold ml-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
