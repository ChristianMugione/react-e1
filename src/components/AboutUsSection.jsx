import { AboutUsText, StyledAboutUs } from "../styles/AboutusStyles"
import tallerMotorhomes from "../assets/img/nuestra-fabrica.png"

export const AboutUsSection = () => { 
  return (
    <StyledAboutUs>
      <img 
      src={tallerMotorhomes}  
      alt="Taller de Motorhomes" 
      />
      <AboutUsText>
        <h3>
          ¿Quiénes Somos?
        </h3>
        <p>
        Diseñamos y fabricamos tu motorhome, casa rodante o camper de manera personalizada, según tus requerimientos. Siempre con un asesoramiento adecuado para lograr tu vehículo ideal.
        </p>
        <p>
        Todos los vehículos son producidos en nuestras instalaciones de 2300 metros cuadrados, equipado con la últimas herramientas de avanzada, operadas por especialistas en cada rubro y que comparten tu misma pasión.
        </p>
      </AboutUsText>
    </StyledAboutUs>
  )
}