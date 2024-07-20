import React, { useEffect, useState } from "react";
import logo from "../assets/img/ruta-camper-logo.png";
import { BurgerMenu } from "./BurgerMenu";
import NavBar from "./NavBar";
import { UserMenu } from "./UserMenu";
import { BsCart, BsPersonFill } from "react-icons/bs";
import { Cart } from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMenu,
  openMenu,
  toggleCart,
  toggleUserMenu,
  initCart,
  closeUserMenu,
  closeCart,
} from "../store/storeSlices";
import { ModalInfo } from "./ModalInfo";
import { Blurer, StyledHeader } from "../styles/HeaderStyles";

export const Header = () => {
  const isOpen = useSelector((state) => state.menuOpened.menuIsOpened);
  const isCartOpened = useSelector((state) => state.cartOpened.cartIsOpened);
  const userMenuOpened = useSelector(
    (state) => state.userMenuOpened.userMenuIsOpened
  );
  const cartItemQuantity = useSelector((state) => state.cartList.quantityCart);

  const dispatch = useDispatch();

  const closeAllMenus = () => {
    dispatch(closeUserMenu());
    dispatch(closeCart());
    dispatch(closeMenu());
    document.removeEventListener("click", clickOnDocumentListener);
  };
  const clickOnDocumentListener = () => {
    document.addEventListener("click", closeAllMenus);
  };

  //clickOnDocumentListener(); //se debe activar al abrir un menu

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
    dispatch(closeUserMenu());
    dispatch(closeMenu());
  };

  const toggleUserMenuFnc = () => {
    dispatch(toggleUserMenu());
    dispatch(closeCart());
    dispatch(closeMenu());
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
              }}
            />
            {cartItemQuantity > 0 && (
              <span className="item-quantity">{cartItemQuantity}</span>
            )}
          </div>
          <BsPersonFill
            className="user-icon"
            onClick={() => {
              toggleUserMenuFnc();
            }}
          />
        </div>
        {isCartOpened && <Cart />}
        {userMenuOpened && <UserMenu />}
        <ModalInfo />
      </StyledHeader>
    </>
  );
};
