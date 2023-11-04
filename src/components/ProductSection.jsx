import React from 'react'
import { ProductCard } from './ProductCard';
import { StyledProductSection } from '../styles/ProductSectionStyles';

const prods = [
{image: "https://ae01.alicdn.com/kf/Sadd16c5008414f7f92fe48aa095720ddc/Linterna-LED-port-til-de-emergencia-para-exteriores-linterna-de-Camping-recargable-con-im-n-accesorio.jpg_80x80.jpg_.webp",
title: "Linterna LED portátil de emergencia para exteriores, linterna de Camping recargable con imán, accesorio de iluminación, 230 horas, LV10",
price: 6628.63},
{image: "https://ae01.alicdn.com/kf/S5850a8359c8349d38c88e4840fca961bv/Taza-de-titanio-para-acampar-vajilla-para-turismo-utensilios-de-Picnic-equipo-de-cocina-al-aire.jpg_80x80.jpg_.webp",
title: "Taza de titanio para acampar, vajilla para turismo, utensilios de Picnic, equipo de cocina al aire libre con vajilla, utensilios de cocina de viaje",
price: 4087.77},
{image: "https://ae01.alicdn.com/kf/Sd6f15094a0f6457c8d7458500041d191x/Parrilla-de-barbacoa-de-acero-inoxidable-304-estufa-port-til-para-exteriores-estufa-de-mesa-IGT.jpg_80x80.jpg_.webp",
title: "Parrilla de barbacoa de acero inoxidable 304, estufa portátil para exteriores, estufa de mesa IGT, estufa de leña plegable, estufa de Camping",
price: 9963.45},
{image: "https://ae01.alicdn.com/kf/S3e6ea477532d4c92b01e771109143ad1Y/Bater-a-de-Panel-Solar-USB-plegable-para-exteriores-cargador-de-bater-a-port-til-para.jpg_80x80.jpg_.webp",
title: "Batería de Panel Solar USB plegable para exteriores, cargador de batería portátil para teléfono móvil, equipo de camping y senderismo, 20W, 5V",
price: 6041.36},
{image: "https://ae01.alicdn.com/kf/Sb908f0dabe3848d4b6164f4c813c16eaF/Alicates-plegables-multifuncionales-herramientas-de-reparaci-n-multiusos-cuchillo-de-bolsillo-port-til-para-exteriores.jpg_80x80.jpg_.webp",
title: "Alicates plegables multifuncionales, herramientas de reparación multiusos, cuchillo de bolsillo, portátil, para exteriores",
price: 2232.88},
{image: "https://ae01.alicdn.com/kf/S1442fd4022e2497ea17fb0fa5dc8653eI/Estufa-de-tres-cabezas-port-til-para-exteriores-estufa-de-Camping-a-prueba-de-viento-quemador.jpg_80x80.jpg_.webp",
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