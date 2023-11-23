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
`;

export const StyledH2 = styled.h2`
  font-size: 2em;
  text-shadow: 1px 2px 6px black;
  color: white;
  max-width: 600px;
  margin: 0 auto;
  
`;

export const StyledP = styled.p`
  font-size: 1em;
  color: white;
  text-shadow: 1px 2px 2px black, -1px -2px 2px lightgray;
  max-width: 600px;
  margin: 0 auto;
`;

