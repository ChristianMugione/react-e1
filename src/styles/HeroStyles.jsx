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
`;

export const StyledH2 = styled.h2`
  font-size: 2.5em;
  text-shadow: 1px 2px 6px black;
  color: white;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 2em;
    max-width: 500px;
  }
  @media (max-width: 576px) {
    font-size: 1.5em;
    max-width: 400px;
  }
`;

export const StyledP = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: white;
  text-shadow: 1px 2px 2px black, -1px -2px 2px lightgray;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1em;
    max-width: 500px;
    text-shadow: .5px 1px 1px black, -.5px -1px 1px lightgray;
  }

  @media (max-width: 576px) {
    font-size: .8em;
    max-width: 400px;
    text-shadow: .5px 1px 1px black, -.5px -1px 1px lightgray;
    text-transform: uppercase;
  }
`;

