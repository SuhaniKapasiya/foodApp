import { CON_URL } from "../utils/constants";

const RestaurantCard = ({ resdata }) => {
  
 
  // console.log("resdata----------------->", resdata);

  // Destructure the necessary fields
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resdata?.info || {};

  return (
    <div className="res-card  bg-slate-400 w-[200px] m-2 rounded-lg h-96 hover:bg-slate-800 hover:text-white">
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
      </div>
    </div>
  );
};

export default RestaurantCard;
