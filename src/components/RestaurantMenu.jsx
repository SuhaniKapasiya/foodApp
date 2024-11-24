
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu =()=>{

  //  const [menu, setmenu] = useState(null);
   const { resid } = useParams();


     const menu = useRestaurantMenu(resid)

  //  console.log("resid------------------------>", resid);
   
//   useEffect(()=>{
    
//     fetchMenuData();

//   },[])


// const fetchMenuData = async () => {
//   try {

//     const menuData = await fetch(MENU_API + resid);
//     const json = await menuData.json();
//      setmenu(json.data);
       
//   } catch (error) {
//     console.error("Error fetching menu data:", error);
//   }
// };



 if (menu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = menu?.cards[2]?.card?.card?.info;

   const { itemCards } =
   menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
     ?.card;

//  console.log("itemCards--------------->", itemCards);
       

    return (
      <div>
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>

        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    );
}



export default RestaurantMenu