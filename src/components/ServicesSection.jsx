import React from 'react';
import { ServicesStyled } from '../styles/ServicesStyles';
import { ServiceCards } from './ServiceCards';
import { ServiceCard } from './ServiceCard';


export const ServicesSection = () => {
  return (
      <ServicesStyled>
        <h2>Nuestros Servicios</h2>
        <ServiceCards>
          <ServiceCard
            cardIcon = "bi bi-lightbulb"
            cardTitle = "Traés tu idea y la realizamos" 
            cardText = "Si lo que deseas es un motorhome hecho desde cero, realizamos todo lo que se te ocurra. Te asesoramos sobre cada detalle y proponemos mejoras. Pero siempre respetamos tu idea, al fin y al cabo vas a ser vos el que lo viva." />
          <ServiceCard
            cardIcon = "bi bi-bus-front"
            cardTitle = "Convertimos tu van o bus en motorhome" 
            cardText = "Una de las formas más económicas de tener un motorhome es convertir un bus o una van. Nosotros hacemos la conversión adaptándonos al espacio disponible que posea tu vehículo." />
          <ServiceCard
            cardIcon = "bi bi-hammer"
            cardTitle = "Mejoramos o arreglamos tu camper" 
            cardText = "Cualquier rotura o mejora que necesite tu RV, nosotros la podemos realizar. Siempre respetando tu idea inicial y aportando nuestra experiencia." />
          <ServiceCard
            cardIcon = "bi bi-cart"
            cardTitle = "Vendemos e instalamos todos los accesorios" 
            cardText = "Desde un equipo de calefacción hasta un estéreo para la cabina. Desde el colchón a medida hasta el retrete. Tenemos todo lo necesario para equipar su motorhome." />
          <ServiceCard
            cardIcon = "bi bi-tools"
            cardTitle = "Reparamos la mecánica de tu vehículo" 
            cardText = "Con nosotros trabajan mecánicos de todas las marcas de vehículos, por lo que garantizamos mucho más que el cuidado de su casa sobre ruedas mientras esté en nuestras manos." />
          <ServiceCard
            cardIcon = "bi bi-chat-fill"
            cardTitle = "Comunicación Constante" 
            cardText = "Durante todo el proceso de fabricación o reparación que nos hayas encargado estaremos en contacto permanente para mantenerte informado y que el resultado final sea tal cual lo esperabas." />
        </ServiceCards>
      </ServicesStyled>
  )
};

// export default ServicesSection;