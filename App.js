import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Item
 * Body
 * -Search
 * -RestaurantContainer
 *   -RestaurantCard
 *     -Img
 *     -Name of Res ,Star Rating,cuisine,delvery time
 *
 * Footer
 * - Copyright
 * - Address
 * - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="Logo-container">
        <img
          className="Logo"
          src="https://res.cloudinary.com/dtqnuyqei/image/upload/v1731256340/foodLogo_jhfbj2.png"
        />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//inline Style
const styleCard = {
    backgroundColor :"#f0f0f0"
}
const RestaurantCard =()=>{
    return(
        <div className="res-card" style ={styleCard}>
       <h1>Golu Brother Momo</h1>
        </div>
    )
}
const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
      </div>
    </div>
  );
}
const AppLayout = () => {
 return(
     <div className="app">
    {/* //Header */}
    <Header />
    {/* Body  */}
    <Body/>
   {/* Footer */}
  </div>
 )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
