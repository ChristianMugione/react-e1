import React from 'react';
import { StyledHeader } from '../styles/StyledHeader';
import logo from '../assets/img/ruta-camper-logo.png'
import NavBar from './NavBar';

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />
      <NavBar />
    </StyledHeader> 
  )
}