import React, { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

const NavBarProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    console.log("toggled");
    setisOpen(!isOpen);
  }

  return (
    <NavBarContext.Provider value={{ isOpen, toggleMenu }}>
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