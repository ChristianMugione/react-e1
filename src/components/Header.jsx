import React from 'react';
import logo from '../assets/img/ruta-camper-logo.png';
import { BurgerMenu } from './BurgerMenu'
import NavBar from './NavBar';
import styled from 'styled-components';
import { useNavBar } from './NavBarContext';

const StyledHeader = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
position: fixed;
top: 0;
padding: 5px 30px;
background-color: rgba(255, 255, 255, 70%);

& img {
  width: 100px;
}

@media (min-width: 992px) {
  top: 5px;
  width: 960px;
  border-radius: 10px;
}

@media (min-width: 1200px) {
  width: 1140px;
}

@media (min-width: 1400px) {
  width: 1280px;
}
`;

export const Header = () => {

  const { isOpen } = useNavBar();

  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />
      <BurgerMenu />
      <NavBar />
    </StyledHeader> 
  )
} 