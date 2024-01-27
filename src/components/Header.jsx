import React, { useEffect, useState } from "react";
import logo from "../assets/img/ruta-camper-logo.png";
import { BurgerMenu } from "./BurgerMenu";
import NavBar from "./NavBar";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import { Cart } from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu, toggleCart } from "../store/storeSlices";
import { initCart } from "../store/storeSlices";
import { ModalInfo } from "./ModalInfo";
import { Blurer, StyledHeader } from "../styles/HeaderStyles";

export const Header = () => {
  // const { isOpen, closeMenu, openMenu } = useNavBar();
  // const [ cartOpen, setCartOpen ] = useState(false);
  const isOpen = useSelector((state) => state.menuOpened.menuIsOpened);
  const dispatch = useDispatch();
  const isCartOpened = useSelector((state) => state.cartOpened.cartIsOpened);
  const cartItemQuantity = useSelector((state) => state.cartList.quantityCart);

  useEffect(() => {
    const cartItemsFromLS = JSON.parse(localStorage.getItem("cart-items"));
    if (cartItemsFromLS) {
      dispatch(initCart(cartItemsFromLS));
    }
    if (window.innerWidth >= 768) {
      dispatch(openMenu());
    } else {
      dispatch(closeMenu());
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      dispatch(openMenu());
    } else {
      dispatch(closeMenu());
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
