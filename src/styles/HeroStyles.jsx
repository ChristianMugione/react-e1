import styled from "styled-components";
import fondoPortada from "../assets/img/fondo-portada.png";

export const HeroStyles = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${fondoPortada});
  background-position: center center;
  background-size: cover;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.8em;
  gap: 8px;

  @media (min-width: 576px) {
    font-size: 1.2em;
  }

  .hero-buttons {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    font-size: 0.8em;
  }

  button {
    background: transparent;
  }

  .btn-tienda {
    border: 2px solid steelblue;
    background-color: #000000aa;
    transition: all 0.5s;

    &:hover {
      background-color: #4682b4aa;
      color: #140158;
      transition: all 0.5s;
    }
  }

  .btn-contacto {
    border: 2px solid #ffffff;
    background-color: #000000aa;
    transition: all 0.5s;

    &:hover {
      background-color: #fafafaaa;
      color: #140158;
      transition: all 0.5s;
    }
  }
`;

export const StyledTextSection = styled.div`
  width: 50%;
  //ss
`;

export const StyledH2 = styled.h2`
  font-size: 1.4em;
  text-shadow: 1px 2px 6px black;
  color: white;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 450px;
    margin-top: 50px;
  }

  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const StyledP = styled.p`
  font-size: 1.1em;
  color: white;
  text-shadow: 1px 2px 2px black;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 450px;
  }
`;
