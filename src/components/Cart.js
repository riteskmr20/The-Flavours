import { useDispatch, useSelector } from "react-redux";
import { CART_EMPTY_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import ItemList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <div className="cart flex justify-center items-center h-screen ">
      <div className="cart-empty ">
        <img
          className="cart-empty-logo w-56 "
          alt="cart-logo"
          src={CART_EMPTY_IMG}
        />

        <div className="my-5 font-semibold text-2xl text-gray-700">
          <h3>Your Cart is empty</h3>
        </div>

        <div className="text-gray-500  text-xs">
          <p>You can go to home page to view more restaurants</p>
        </div>
        <Link to="/">
          <button className="cart-button my-5">SEE RESTAURANTS NEAR YOU</button>
        </Link>
      </div>
    </div>
  ) : (

    <div className="m-4 p-4">
      <div className="text-4xl text-center font-bold py-4">Cart</div>
      <button
        className="cart-button  text-center mx-auto block"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-[50%] mx-auto">
        <ItemList key={cartItems?.info?.id} items={cartItems} />
      </div>
    </div>
    
  );
};

export default Cart;
