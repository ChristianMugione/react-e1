import React from 'react';
import { StyledA, StyledLi, StyledUl } from '../styles/NavBarStyles';

const NavBar = () => {
  return (
    <StyledUl>
      <StyledLi>
        <StyledA>Inicio</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>Nosotros</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>Servicios</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>Contacto</StyledA>
      </StyledLi>
    </StyledUl>
    
  )
}

export default NavBar;