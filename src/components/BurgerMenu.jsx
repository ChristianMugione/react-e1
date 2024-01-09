import React from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { menuToggle } from "../store/storeSlices";

export const BurgerMenu = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(menuToggle());
  };

  return (
    <BurgerIcon onClick={toggleMenu}>
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
