import { FeaturedProductCard } from "./FeaturedProductCard";
import { useSelector } from "react-redux";
import { StyledFeaturedProducts } from "../styles/ProductStyles";
import { useEffect, useState } from "react";

export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const allProducts = useSelector((state) => state.productList.products);

  useEffect(() => {
    if (!allProducts) return;

    setFeaturedProducts(allProducts.filter((prod) => prod.featured == true));
  }, [allProducts]);

  // for (let i = 0; i < 4; i++) {
  //   let randomIndex;
  //   do {
  //     randomIndex = Math.floor(Math.random() * allProducts.length);
  //   } while (
  //     FeaturedProducts.some((prod) => prod.key == allProducts[randomIndex].key)
  //   );

  //   FeaturedProducts = [...FeaturedProducts, allProducts[randomIndex]];
  // }

  return (
    <StyledFeaturedProducts>
      {!featuredProducts && <p className="loading">Cargando...</p>}
      {featuredProducts &&
        featuredProducts.map((prod) => {
          return (
            <FeaturedProductCard
              key={prod._id}
              index={prod._id}
              image={prod.thumbnail}
              title={prod.title}
              price={prod.price}
            />
          );
        })}
    </StyledFeaturedProducts>
  );
};
