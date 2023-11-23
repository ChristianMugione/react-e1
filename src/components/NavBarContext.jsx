import React, { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

const NavBarProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  }

  const closeMenu = () => {
    if (isOpen && window.innerWidth < 768) {
      toggleMenu();
    }
  }

  const openMenu = () => {
    if (!isOpen) {
      toggleMenu();
    }
  }

  return (
    <NavBarContext.Provider value={{ isOpen, toggleMenu, closeMenu, openMenu }}>
      { children }
    </NavBarContext.Provider>
  )
}; 

const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBar debe ser utilizado dentro de NavBarProvider");
  }
  return context;
};

export { NavBarProvider, useNavBar };