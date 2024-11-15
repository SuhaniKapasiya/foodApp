import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

  //Local State Variable => Super powerful variabl
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState("");

  //Whenevr state variable update,react trigger a reconciliation cycle(re-render the componet )
   console.log("Body render ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/mapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
    // );

    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();

    console.log("Data---------------->", json);

    setlistOfRestaurants(json);
    setfilteredRestaurant(json);
  };




  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          {/* onChange Event: The onChange attribute listens for any changes in the
          input field's value. When the user types in the input field, the
          onChange handler is triggered. */}

          <input
            type="text "
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              //FIlter the resturant cards and update the Ui
              //Search Text

              const filterResturant = listOfRestaurants.filter((res) =>
                res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filterResturant);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>

        <button
          onClick={() => {
            const filter = listOfRestaurants.filter(
              (res) => res.rating.rate > 4.5
            );
            setfilteredRestaurant(filter);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      {/* * -RestaurantContainer */}
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
