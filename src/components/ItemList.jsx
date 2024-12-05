import React from 'react'
import { CON_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function ItemList({ items }) {

    // console.log("itemList----------->", items);  
    const dispatch  = useDispatch();

    const handleAddItem = (item) => {
      //Dispatch an action
      dispatch(addItem(item));

    }
  return (
    <div>
      {
           items.map((item)=>{
               const { id, name, description, price, defaultPrice, imageId } =
                 item?.card.info;
           return (
             <div
               key={id}
               className="text-left border-b-2 border-gray- flex justify-between p-2 m-2"
             >
               <div className="w-9/12">
                 <div className="py-12">
                   <span className="font-bold text-gray-800 text-md">
                     {name} - ₹ <span>{price / 100 || defaultPrice / 100}</span>
                   </span>
                 </div>
                 <p className="text-sm text-gray-600">{description}</p>
               </div>
               <div className="w-3/12 ">
                 <div className="absolute">
                   <button
                     className="p-2 mx-20 rounded-lg bg-black text-white shadow-lg"
                     
                     onClick={() => handleAddItem(item)}
                   
                   >
                     Add+
                   </button>
                 </div>
                 <img src={CON_URL + imageId} />
               </div>
             </div>
           );
           })


      }
       
    </div>
  );
}

export default ItemList
