import React from 'react';
import { useNavBar } from './NavBarContext';
import styled from 'styled-components';
import { BsList } from 'react-icons/bs'

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

export const BurgerMenu = () => {
  const { toggleMenu } = useNavBar();

  return (
    <BurgerIcon onClick={toggleMenu}>
      <BsList />
    </BurgerIcon>
  )
};
