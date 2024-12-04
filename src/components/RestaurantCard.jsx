import { useContext } from "react";
import { CON_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resdata }) => {
  // console.log("resdata----------------->", resdata);
  // Destructure the necessary fields
  const { loggedInUser } = useContext(UserContext);

  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resdata?.info || {};

  return (
    <div className="res-card  bg-slate-400 w-[200px] m-2 rounded-lg h-[400px] hover:bg-slate-800 hover:text-white">
      <div className="">
        <img
          className="w-44 items-center p-4 px-5 rounded-md"
          src={CON_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="p-3 ">
        <h1 className="font-bold ">{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>Rating: {avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>Delivery: {sla?.slaString || sla?.deliveryTime}</h3>
        <h3>User : {loggedInUser}</h3>
      </div>
    </div>
  );
};
export const withLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-purple-800 text-black m-2 p-2 rounded-lg mt-0">
          Top Restro 👌⭐⭐
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
