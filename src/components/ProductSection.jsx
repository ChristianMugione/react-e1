import React from 'react'
import { ProductCard } from './ProductCard';
import { StyledProductSection } from '../styles/ProductSectionStyles';

const prods = [
{image: "/linterna-led.jpg",
title: "Linterna LED portátil de emergencia para exteriores, linterna de Camping recargable con imán, accesorio de iluminación, 230 horas, LV10",
price: 6628.63},
{image: "/public/image.jpeg",
title: "Taza de titanio para acampar, vajilla para turismo, utensilios de Picnic, equipo de cocina al aire libre con vajilla, utensilios de cocina de viaje",
price: 4087.77},
{image: "/public/barbacoa-redonda.webp",
title: "Parrilla de barbacoa de acero inoxidable 304, estufa portátil para exteriores, estufa de mesa IGT, estufa de leña plegable, estufa de Camping",
price: 9963.45},
{image: "/public/paneles-solares-portatiles.webp",
title: "Batería de Panel Solar USB plegable para exteriores, cargador de batería portátil para teléfono móvil, equipo de camping y senderismo, 20W, 5V",
price: 6041.36},
{image: "/public/1693894715446-179c52f58d9e4f94aa856668f9f991f8-goods.webp",
title: "Alicates plegables multifuncionales, herramientas de reparación multiusos, cuchillo de bolsillo, portátil, para exteriores",
price: 2232.88},
{image: "/public/Estufa-de-tres-cabezas-port-til-para-exteriores-estufa-de-Camping-a-prueba-de-viento-quemador.webp",
    title: "Estufa de tres cabezas portátil para exteriores, estufa de Camping a prueba de viento, quemador de Picnic, estufa de Gas plegable para exteriores, recién llegado",
    price: "5192.69"},
]

export const ProductSection = () => (
  <StyledProductSection>
    <h2>Productos Destacados</h2>
    <div className="cards">
      {prods.map( prod => (
      <ProductCard 
      image = {prod.image}
      title = {prod.title}
      price = {prod.price}
      />
      ))}
    </div>
  </StyledProductSection>
);


//map, por cada producto una card