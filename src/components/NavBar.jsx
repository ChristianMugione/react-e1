import { StyledUl } from "../styles/NavBarStyles";
import { Link } from "react-router-dom";
import { useNavBar } from "./NavBarContext";

const NavBar = () => {
  const { closeMenu } = useNavBar();
  
  return (
    <StyledUl>
      <li>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
      </li>
      <li>
        <Link to="/aboutus" onClick={closeMenu}>Nosotros</Link>
      </li>
      <li>
        <Link to="/services" onClick={closeMenu}>Servicios</Link>
      </li>
      <li>
        <Link to="/products" onClick={closeMenu}>Productos</Link>
      </li>
      <li>
        <Link to="/contact" onClick={closeMenu}>Contacto</Link>
      </li>
    </StyledUl>
  );
};

export default NavBar;
