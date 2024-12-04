import { useState } from "react";
import ItemList from "./ItemList"
const RestaurantCategories = ({ data, showItem, setshowIndex }) => {
  
  //  console.log("list--------------->", data);

  const handleOnclick = () => {
    setshowIndex();
  };

  return (
    <div>
      <div className="p-4 w-6/12 shadow-lg bg-gray-50  mx-auto my-4">
        <div className="flex justify-between " onClick={handleOnclick}>
          <h2 className=" font-bold text-lg">
            {data?.title} <span>{data?.itemCards.length}</span>
          </h2>

          <span className>⬇️</span>
        </div>
        {showItem && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};


export default RestaurantCategories