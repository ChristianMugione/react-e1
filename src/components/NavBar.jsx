import React from 'react';
import { StyledA, StyledLi, StyledUl } from '../styles/NavBarStyles';
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    // <StyledUl isOpen={isOpen}>
    <StyledUl>
      <StyledLi>
        <StyledA>
          <Link to="/">Inicio</Link>
        </StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>
          <Link to="/aboutus">Nosotros</Link>
        </StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>
          <Link to="/services">Servicios</Link>
        </StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>
          <Link to="/products">Productos</Link>
        </StyledA>
      </StyledLi>
    </StyledUl>
    
  )
} 

export default NavBar;