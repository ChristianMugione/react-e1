import { HeroStyles } from "../styles/HeroStyles";
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
      <h2>TU VIAJE A LA LIBERTAD COMIENZA CON NOSOTROS</h2>
      <p className="hero-text">
        Brindamos asesoramiento integral para quienes desean una vida de viajes
        y acampadas en vehículos recreativos
      </p>
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
