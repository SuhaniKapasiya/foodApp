import { useState,useEffect } from "react";
import { MENU_API } from "./constants";



const useRestaurantMenu = (resid)=>{
 
    const[menu , setmenu]= useState(null);

   useEffect(()=>{
      fetchData();
   },[])


   const fetchData = async ()=>{


    const menuData = await fetch(MENU_API+resid);

    const json = await menuData.json();

    setmenu(json.data);


   } 

   return menu;

} 


export default  useRestaurantMenu;