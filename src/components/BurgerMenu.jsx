import React from 'react';
import { useNavBar } from './NavBarContext';
import styled from 'styled-components';
import { BsMenuApp } from 'react-icons/bs'

const BurgerIcon = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: black;
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerMenu = () => {
  const { toggleMenu } = useNavBar();

  return (
    <BurgerIcon onClick={toggleMenu}>
      <BsMenuApp />
    </BurgerIcon>
  )
};
