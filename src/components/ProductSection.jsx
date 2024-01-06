import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import { StyledProductSection } from "../styles/ProductSectionStyles";
import { useSelector } from "react-redux";

export const ProductSection = () => {
  const productList = useSelector((state) => state.productList.products);
  const [cat, setCat] = useState("todas");

  return (
    <StyledProductSection>
      <h2>Productos</h2>

      <div>
        <button
          onClick={() => {
            setCat("todas");
          }}
        >
          Todos
        </button>
        <button
          onClick={() => {
            setCat("iluminacion");
          }}
        >
          Iluminación
        </button>
        <button
          onClick={() => {
            setCat("cocina");
          }}
        >
          Cocina
        </button>
        <button
          onClick={() => {
            setCat("herramientas");
          }}
        >
          Herramientas
        </button>
        <button
          onClick={() => {
            setCat("varios");
          }}
        >
          Varios
        </button>
        <h4>Categoría: {cat.charAt(0).toUpperCase() + cat.slice(1)}</h4>
      </div>
      <div className="cards">
        {productList.map((prod) => {
          return prod.category == cat || cat == "todas" ? (
            <ProductCard
              key={prod.key}
              index={prod.key}
              image={prod.image}
              title={prod.title}
              price={prod.price}
            />
          ) : (
            ""
          );
        })}
      </div>
    </StyledProductSection>
  );
};
