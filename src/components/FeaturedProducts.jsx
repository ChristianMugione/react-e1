import styled from "styled-components";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { useSelector } from "react-redux";

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
    <StyledSection>
      {FeaturedProducts.map((prod) => (
        <FeaturedProductCard
          key={prod.key}
          index={prod.key}
          image={prod.image}
          title={prod.title}
          price={prod.price}
        />
      ))}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  gap: 4px;
  margin-top: 20px;
  overflow-x: auto;
  white-space: nowrap;

  @media (min-width: 576px) {
    justify-content: center;
  }
`;
