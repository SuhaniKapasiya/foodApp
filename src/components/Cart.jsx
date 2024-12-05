import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = ()=>{
    
  // belwo code is take out whole store data and its a bad practice
  //performance is not optimize
  //here your cart compoent get to know that  store variable is updated when ever anything change in store
  // const store = useSelector((store)=>store);
  // const CartItems = store.cart.items

  // below is the correct use here we are subscribing small portion of store
  const CartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearItem());
  };

  return (
    <div className="r m-4 p-4">
      <div className="text-2xl font-bold text-center">Cart</div>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-md items-end"
          onClick={handleClick}
        >
          Clear Cart
        </button>

        {clearItem.length === 0 && (
          <h1 className="font-bold text-blue-950 items-center">
            Cart is empty. Add Item to the Cart
          </h1>
        )}
        <div className="text-center">
          <ItemList items={CartItems} />
        </div>
      </div>
    </div>
  );
}


export default Cart;