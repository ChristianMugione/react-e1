import React from "react";
import { addOneMoreItem, subsItem, removeOneItem } from "../store/storeSlices";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { toCurrency } from "../assets/functions/auxiliar";
import { CartItemStyled } from "../styles/CartStyles";

export const CartItem = (props) => {
  const dispatch = useDispatch();
  // console.log(props);

  const substractItem = () => {
    dispatch(subsItem(props.index));
    console.log(props.index);
  };

  const addOneItem = () => {
    dispatch(addOneMoreItem(props.index));
  };

  const removeItem = () => {
    dispatch(removeOneItem(props.index));
  };

  return (
    <CartItemStyled>
      <img src={props.image} alt={props.title} />
      <p className="title">{props.title}</p>
      <p>
        <button onClick={substractItem}>-</button>
        {props.quantity}
        <button onClick={addOneItem}>+</button>
      </p>
      <p>{toCurrency(props.price)}</p>
      <BsTrash onClick={removeItem} className="trash" />
    </CartItemStyled>
  );
};
