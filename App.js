import React from "react";
import ReactDOM from "react-dom/client";
import {products} from "./data"

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

 const data = products;
 console.log("data-------------->",data);
 

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
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const styleCard = {
     backgroundColor :"#f0f0f0"

}
const RestaurantCard = ({ resdata }) => {

  return (
    <div className="res-card " style={styleCard}>
      <div>
        <img className="res-logo" src={resdata.image} />
      </div>
      <div>
        <h1 className="title">{resdata.title}</h1>
        <h3>{resdata.category}</h3>
        <h3>Price  {resdata.price}</h3>
        <h3>Rating  {resdata.rating.rate}</h3> 
        <h3>Delivey  {resdata.rating.count} minutes</h3>
      </div>
    </div>
  );
};

const Body = ()=>{
  return (
    <div>
      {/* -Search */}
      <div className="search"> 
        <h1>Search</h1>
      </div>
      {/* * -RestaurantContainer */}
      <div className="res-container">
        {data.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div>
      {/* Header */}
       <Header/>
      {/* Body */}
      <Body/>
      {/* Footer */}
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


