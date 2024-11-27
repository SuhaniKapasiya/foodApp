import React, { useEffect, useState } from "react";
import RestaurantCard, {withLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { wihLabel } from "./RestaurantCard";

const Body = () => {

  //Local State Variable => Super powerful variabl
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();
 
  const TopRatedRestaurantPromoted = withLabel(RestaurantCard);

  //Whenevr state variable update,react trigger a reconciliation 
  //cycle(re-render the componet )
  console.log("Body render ");

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

   
  const json = await data.json();
 

  // Extract the list of restaurants
    const restaurants =
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    //  console.log("Live API data: ", restaurants);

   // Set state with the fetched restaurants
    setlistOfRestaurants(restaurants);
    setfilteredRestaurant(restaurants);


  //  console.log("restaurants---------------------->", restaurants);
   
    
};


if (onlineStatus === false)

  return (
    <h1 className=" text-red-800 font-bold flex items-center justify-center">
      Look like you are offline !! Please check your internet connection</h1>
  );



  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center">
        <div className="search">
          {/* onChange Event: The onChange attribute listens for any changes in the
          input field's value. When the user types in the input field, the
          onChange handler is triggered. */}

          <input
            type="text"
            className="border border-black px-3 py-2 w-50 ml-2 mb-4"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className=" bg-green-300 px-2 py-2 rounded-md ml-3 mt-3"
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

        <div className="ml-5">
          <button
            className="px-4 py-2 bg-red-300 rounded-md"
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
      </div>

      {/* * -RestaurantContainer */}

      <div className="res-container m-4 flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.avgRating > 4.3 ? (
              <TopRatedRestaurantPromoted resdata={restaurant} />
            ) : (
              <RestaurantCard  resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
