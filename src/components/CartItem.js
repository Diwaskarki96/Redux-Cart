import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { decreseAmount, increaseAmount } from "../store/slice/cartSlice";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img src={img} alt={title}></img>
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increaseAmount());
          }}
          className="amount-btn"
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => {
            dispatch(decreseAmount());
          }}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
