import React, { useState } from 'react'
import { ProductCard } from './ProductCard';
import { StyledProductSection } from '../styles/ProductSectionStyles';
import { useSelector } from 'react-redux';

export const ProductSection = () => {
  const productList = useSelector(state => state.productList.products)
  const [cat, setCat] = useState("todas");
  
  return (
    <StyledProductSection>
    <h2>Productos Destacados</h2>
    
    <div>
      <button onClick={() => {setCat("todas")}}>Todos</button>
      <button onClick={() => {setCat("iluminacion")}}>Iluminación</button>
      <button onClick={() => {setCat("cocina")}}>Cocina</button>
      <button onClick={() => {setCat("herramientas")}}>Herramientas</button>
      <h4>Categoría: {cat.charAt(0).toUpperCase() + cat.slice(1)}</h4>
    </div>
    <div className="cards">
      {productList.map( prod => {
        return (prod.category == cat || cat == "todas")?
        (<ProductCard 
          key = {prod.key}
          index = {prod.key}
          image = {prod.image}
          title = {prod.title}
          price = {prod.price}
          />
      ):""})}
    </div>
  </StyledProductSection>
)};

// const prods = [
// {key:1,
// image: "/linterna-led.jpg",
// title: "Linterna LED portátil de emergencia para exteriores, linterna de Camping recargable con imán, accesorio de iluminación, 230 horas, LV10",
// price: 6628.63},
// {key:2,
//   image: "/public/image.jpeg",
// title: "Taza de titanio para acampar, vajilla para turismo, utensilios de Picnic, equipo de cocina al aire libre con vajilla, utensilios de cocina de viaje",
// price: 4087.77},
// {key:3,image: "/public/barbacoa-redonda.webp",
// title: "Parrilla de barbacoa de acero inoxidable 304, estufa portátil para exteriores, estufa de mesa IGT, estufa de leña plegable, estufa de Camping",
// price: 9963.45},
// {key:4,image: "/public/paneles-solares-portatiles.webp",
// title: "Batería de Panel Solar USB plegable para exteriores, cargador de batería portátil para teléfono móvil, equipo de camping y senderismo, 20W, 5V",
// price: 6041.36},
// {key:5,image: "/public/1693894715446-179c52f58d9e4f94aa856668f9f991f8-goods.webp",
// title: "Alicates plegables multifuncionales, herramientas de reparación multiusos, cuchillo de bolsillo, portátil, para exteriores",
// price: 2232.88},
// {key:6,image: "/public/Estufa-de-tres-cabezas-port-til-para-exteriores-estufa-de-Camping-a-prueba-de-viento-quemador.webp",
//     title: "Estufa de tres cabezas portátil para exteriores, estufa de Camping a prueba de viento, quemador de Picnic, estufa de Gas plegable para exteriores, recién llegado",
//     price: "5192.69"},
// ]