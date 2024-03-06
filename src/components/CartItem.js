import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const CartItem = ({ name, quantity, totalPrice, price, id }) => {
  const dispatch = useDispatch();
  const decreamentCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const increamentCartItem = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${totalPrice}</article>
      <button className="cart-actions" onClick={decreamentCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={increamentCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
