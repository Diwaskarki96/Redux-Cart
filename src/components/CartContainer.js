import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../store/slice/cartSlice";
const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <div className="cart">
        <h2>your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </div>
    );
  }
  return (
    <div className="cart">
      <div>
        <h2> your bag</h2>
      </div>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </div>
  );
};

export default CartContainer;
