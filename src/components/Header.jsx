import React from "react";
import logo from "../assets/img/ruta-camper-logo.png";
import { BurgerMenu } from "./BurgerMenu";
import NavBar from "./NavBar";
import styled from "styled-components";
import { useNavBar } from "./NavBarContext";

const StyledHeader = styled.header`
  width: 100%;

  display: flex;
  padding: 5px 0;
  justify-content: space-between;

  position: fixed;
  top: 0;

  background-color: rgba(255, 255, 255, 70%);
  
  & img {
    width: 100px;
    margin-left: 20px;
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

const Blurer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(50,50,50,80%);
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header = () => {
  const { isOpen, closeMenu, openMenu } = useNavBar();

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      openMenu();
    } else {
      closeMenu();
    }
  })

  return (
    <>
    {isOpen && <Blurer onClick={closeMenu} />}
    <StyledHeader>
      <img src={logo} alt="Logo" />
      <BurgerMenu />
      {isOpen && <NavBar />}
    </StyledHeader>
    </>
  );
};
