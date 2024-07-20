import styled from "styled-components";
import fondoPortada from "../assets/img/fondo-portada.png";

export const HeroStyles = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* font-family: "Ubuntu", sans-serif; */
  font-size: 0.8em;
  gap: 8px;
  background: radial-gradient(circle, #4682b4 0%, #082645cc 70%);

  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  /* margin-top: 1rem; */
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    /* background-image: url(${fondoPortada}); */
    background-position: center center;
    background-size: cover;

    z-index: -1;
  }

  @media (min-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  h2 {
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: white;
    text-shadow: 1px 2px 6px black;
    max-width: 300px;
    margin: 0 auto;
    /* margin-top: 70px; */

    @media (min-width: 576px) {
      font-size: 2.1rem;
      line-height: 2.2rem;

      max-width: 450px;
      margin-top: 50px;
    }

    @media (min-width: 768px) {
      font-size: 2.6rem;
      max-width: 720px;
      margin-top: 60px;
      /* font-size: 3.75rem; */
      line-height: 1;
    }
  }

  .hero-text {
    font-size: 1.1em;
    color: white;
    text-shadow: 1px 2px 2px black;
    max-width: 300px;
    margin: 0 auto;

    @media (min-width: 576px) {
      max-width: 500px;
      font-size: 1.2rem;
    }
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
