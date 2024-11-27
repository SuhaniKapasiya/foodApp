import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";


const RestaurantMenu =()=>{

  //  const [menu, setmenu] = useState(null);
   const { resid } = useParams();


     const menu = useRestaurantMenu(resid)

   if (menu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = menu?.cards[2]?.card?.card?.info;

    const Categories =
     menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
       (item) =>
         item?.card?.card?.["@type"] ===
         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );
    return (
      <div className="px-4">
        <h1 className=" font-bold  ">{name}</h1>
        <p className="font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>

        <RestaurantCategories data={Categories} />
      </div>
    );
}



export default RestaurantMenu