import React from "react";
import RestaurantCard from "./RestaurantCard";
import { products } from "../utils/mockData";
const Body = () => {

  const data = products;
  console.log("data-------------->", data);
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
};

export default Body;