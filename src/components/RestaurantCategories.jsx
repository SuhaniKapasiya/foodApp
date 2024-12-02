import ItemList from "./ItemList"
const RestaurantCategories =({data})=>{

    //  console.log("list--------------->", data);
     
   return (
     <div className="p-4 w-6/12 shadow-lg bg-gray-50  mx-auto my-4">
       <div>
         <div className="flex justify-between ">
           <h2 className=" font-bold text-lg">
             {data?.title} <span>{data?.itemCards.length}</span>
           </h2>

           <span className>⬇️</span>
         </div>
         <ItemList items={data?.itemCards} />
       </div>
     </div>
   ); 
}


export default RestaurantCategories