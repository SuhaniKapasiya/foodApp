import { CON_URL } from "../utils/constants";

const RestaurantCard = ({ resdata }) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  // console.log("resdata----------------->", resdata);

  // Destructure the necessary fields
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resdata?.info || {};

  return (
    <div className="res-card" style={styleCard}>
      <div>
        <img
          className="res-logo"
          src={CON_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div>
        <h1 className="title">{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>Rating: {avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>Delivery: {sla?.slaString || sla?.deliveryTime}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
