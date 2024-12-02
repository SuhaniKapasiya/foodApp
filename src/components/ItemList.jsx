import React from 'react'

function ItemList({ items }) {

    console.log("itemList----------->", items);

    
    
  return (
    <div>
      {
           items.map((item)=>{
               const { id, name, description, price, defaultPrice } = item?.card.info;
           return (
             <div key={id}>
               <h2>{name}</h2>
               <p>{description}</p>
               <p>Price: {price || defaultPrice}</p>
             </div>
           );
           })

      }
       
    </div>
  );
}

export default ItemList
