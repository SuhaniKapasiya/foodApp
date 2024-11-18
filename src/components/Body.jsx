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

  // const fetchData = async () => {
  //   // const data = await fetch("https://fakestoreapi.com/products");
  //   // const json = await data.json();

  //   // console.log("Data---------------->", json);

  //   //  using live api
  //   const data = await fetch(
  //     "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1"
  //   );

  //   const json = await data.json();

  //   console.log(
  //     "Live api data ",
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //  console.log(
  //    "id---------->",
  //    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //      ?.info.id
  //  );
   
  //   setlistOfRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setfilteredRestaurant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };


const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1"
  );

  const json = await data.json();

  // Extract the list of restaurants
    const restaurants =
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    //  console.log("Live API data: ", restaurants);

   // Set state with the fetched restaurants
    setlistOfRestaurants(restaurants);
    setfilteredRestaurant(restaurants);
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
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
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
              (res) => res?.info?.avgRating > 4.3
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
          <RestaurantCard key={restaurant?.info?.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
