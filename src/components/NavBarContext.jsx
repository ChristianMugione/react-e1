import React, { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/storeSlices";

const NavBarContext = createContext();

const NavBarProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(true);
  const dispatch = useDispatch();
  const isCartOpened = useSelector((state) => state.cartOpened.cartIsOpened);

  const toggleMenu = () => {
    if (!isOpen) {
      setisOpen(true);
      if (isCartOpened) {
        dispatch(toggleCart());
      }
    } else {
      setisOpen(false);
    }
  };

  const closeMenu = () => {
    if (isOpen && window.innerWidth < 768) {
      toggleMenu();
    }
  };

  const openMenu = () => {
    if (!isOpen) {
      toggleMenu();
    }
  };

  return (
    <NavBarContext.Provider value={{ isOpen, toggleMenu, closeMenu, openMenu }}>
      {children}
    </NavBarContext.Provider>
  );
};

const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBar debe ser utilizado dentro de NavBarProvider");
  }
  return context;
};

export { NavBarProvider, useNavBar };
