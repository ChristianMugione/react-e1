import { StyledUl } from "../styles/NavBarStyles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledUl>
      <li>
        <a>
          <Link to="/">Inicio</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to="/aboutus">Nosotros</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to="/services">Servicios</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to="/products">Productos</Link>
        </a>
      </li>
    </StyledUl>
  );
};

export default NavBar;
