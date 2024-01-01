import React, { useEffect, useState } from "react";
import logo from "../assets/img/ruta-camper-logo.png";
import { BurgerMenu } from "./BurgerMenu";
import NavBar from "./NavBar";
import styled from "styled-components";
import { useNavBar } from "./NavBarContext";
import { BsCart } from "react-icons/bs";
import { Cart } from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/storeSlices";
import { initCart } from "../store/storeSlices";
import { ModalInfo } from "./ModalInfo";

const StyledHeader = styled.header`
  width: 100%;

  display: flex;
  padding: 5px 0;
  justify-content: space-between;

  position: fixed;
  top: 0;

  background-color: rgba(235, 235, 255, 95%);

  z-index: 2;

  .nav-cart {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .cart-icon-container {
    position: relative;
    width: 30px;
    height: 30px;
  }

  .cart-icon {
    font-size: 28px;
    color: #222;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
  }

  .item-quantity {
    background-color: red;
    color: white;
    width: 20px;
    height: 20px;
    /* padding: 2px 6px; */
    border-radius: 50%;
    font-size: 12px;
    font-weight: 800;
    position: absolute;
    top: -4px;
    right: -4px;
  }

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
  background-color: rgb(50, 50, 50, 80%);
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header = () => {
  const { isOpen, closeMenu, openMenu } = useNavBar();
  // const [ cartOpen, setCartOpen ] = useState(false);
  const dispatch = useDispatch();
  const isCartOpened = useSelector((state) => state.cartOpened.cartIsOpened);
  const cartItemQuantity = useSelector((state) => state.cartList.quantityCart);

  useEffect(() => {
    const cartItemsFromLS = JSON.parse(localStorage.getItem("cart-items"));
    if (cartItemsFromLS) {
      dispatch(initCart(cartItemsFromLS));
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  const toggleCartOpened = () => {
    dispatch(toggleCart());
  };

  return (
    <>
      {isOpen && <Blurer onClick={closeMenu} />}
      <StyledHeader>
        <img src={logo} alt="Logo" />
        <div className="nav-cart">
          <BurgerMenu />
          {isOpen && <NavBar />}
          <div className="cart-icon-container">
            <BsCart
              className="cart-icon"
              onClick={() => {
                toggleCartOpened();
                closeMenu();
              }}
            />
            {cartItemQuantity > 0 && (
              <span className="item-quantity">{cartItemQuantity}</span>
            )}
          </div>
        </div>
        {isCartOpened && <Cart />}
        <ModalInfo />
      </StyledHeader>
    </>
  );
};
