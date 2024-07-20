import React from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { closeCart, closeUserMenu, menuToggle } from "../store/storeSlices";

export const BurgerMenu = () => {
  const dispatch = useDispatch();

  //Función para cambiar el estado del menú entre abierto y cerrado
  const toggleMenu = () => {
    dispatch(menuToggle());
    dispatch(closeCart());
    dispatch(closeUserMenu());
  };

  return (
    <BurgerIcon
      onClick={() => {
        toggleMenu();
      }}
    >
      <BsList />
    </BurgerIcon>
  );
};

const BurgerIcon = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-right: 30px;

  @media (min-width: 768px) {
    display: none;
  }
`;
