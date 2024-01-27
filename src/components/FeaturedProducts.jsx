import { FeaturedProductCard } from "./FeaturedProductCard";
import { useSelector } from "react-redux";
import { StyledFeaturedProducts } from "../styles/ProductStyles";

export const FeaturedProducts = () => {
  //generar array con 3 destacados (random)
  const allProducts = useSelector((state) => state.productList.products);

  let FeaturedProducts = [];

  for (let i = 0; i < 4; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * allProducts.length);
    } while (
      FeaturedProducts.some((prod) => prod.key == allProducts[randomIndex].key)
    );

    FeaturedProducts = [...FeaturedProducts, allProducts[randomIndex]];
  }

  return (
    <StyledFeaturedProducts>
      {FeaturedProducts.map((prod) => (
        <FeaturedProductCard
          key={prod.key}
          index={prod.key}
          image={prod.image}
          title={prod.title}
          price={prod.price}
        />
      ))}
    </StyledFeaturedProducts>
  );
};
