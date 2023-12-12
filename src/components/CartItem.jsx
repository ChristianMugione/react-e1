import React from "react";
import styled from "styled-components";
import { addOneMoreItem, subsItem, removeOneItem } from "../store/storeSlices";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";

export const CartItem = (props) => {
  const dispatch = useDispatch();
  // console.log(props);

  const substractItem = () => {
    dispatch(subsItem(props.index));
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
      <p>{props.price}</p>
      <BsTrash onClick={removeItem} className="trash" />
    </CartItemStyled>
  );
};

const CartItemStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  gap: 8px;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100px;
    max-width: 15%;
    border-radius: 8px;
  }

  .title {
    max-width: 30%;
  }

  button {
    padding: 2px;
    background-color: white;
    color: black;
    width: 20px;
  }

  .trash {
    cursor: pointer;
  }
`;
