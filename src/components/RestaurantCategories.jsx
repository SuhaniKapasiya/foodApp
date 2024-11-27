
const RestaurantCategories =({data})=>{

    //  console.log("Categories--------------->", data);
     
     const list = data?.card?.card?.itemCards



   return (
     <div>
       {data.map((dish) => (
         <div className="flex justify-between px-10 py-4 w-9/12 border-b-2 border-black ">
           <h2 className=" font-bold">
             {dish?.card?.card?.title}{" "}
             <span>{dish?.card?.card?.itemCards.length}</span>
           </h2>

           <span>⬇️</span>

           <itemCards list={list} />
         </div>
       ))}
     </div>
   ); 
}


export default RestaurantCategories