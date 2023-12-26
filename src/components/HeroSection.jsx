import { HeroStyles, StyledH2, StyledP } from "../styles/HeroStyles";
import { useNavigate } from "react-router-dom";
import { FeaturedProducts } from "./FeaturedProducts";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleClickTienda = () => {
    navigate("/products");
  };

  const handleClickContacto = () => {
    navigate("/contact");
  };

  return (
    <HeroStyles>
      <StyledH2>TU VIAJE A LA LIBERTAD EMPIEZA CON NOSOTROS</StyledH2>
      <StyledP>
        Brindamos asesoramiento integral para quienes desean una vida de viajes
        y acampadas en vehículos recreativos
      </StyledP>
      <div className="hero-buttons">
        <button className="btn-tienda" onClick={handleClickTienda}>
          TIENDA
        </button>
        <button className="btn-contacto" onClick={handleClickContacto}>
          CONTACTO
        </button>
      </div>
      <FeaturedProducts />
    </HeroStyles>
  );
};
