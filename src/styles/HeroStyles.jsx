import styled from "styled-components";
import fondoPortada from '../assets/img/fondo-portada.png';

export const HeroStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${fondoPortada});
  background-position: center center;
  background-size: cover;  
  font-family: 'Ubuntu', sans-serif;
  font-size: 1em;
  gap: 8px;

  @media (min-width:576px) {
    font-size: 1.2em;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 1.4em;
  text-shadow: 1px 2px 6px black;
  color: white;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width:576px) {
    max-width: 450px;
  }
  
`;

export const StyledP = styled.p`
  font-size: 1.1em;
  color: white;
  text-shadow: 1px 2px 2px black;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width:576px) {
    max-width: 450px;
  }

`;

