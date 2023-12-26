import styled from "styled-components";
import { FeaturedProductCard } from "./FeaturedProductCard";

export const FeaturedProducts = () => {
  //generar array con 3 destacados (random)
  return (
    <StyledSection>
      <FeaturedProductCard
        imageUrl="/barbacoa-redonda.webp"
        title="Barbacoa Recopada"
        price="1535.05"
      />
      <FeaturedProductCard
        imageUrl="/barbacoa-redonda.webp"
        title="Barbacoa Pedorra"
        price="1535.05"
      />
      <FeaturedProductCard
        imageUrl="/barbacoa-redonda.webp"
        title="Barbacoa Berreta"
        price="1535.05"
      />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  gap: 4px;
  margin-top: 10vh;
  overflow-x: auto;
  white-space: nowrap;

  @media (min-width: 600px) {
    justify-content: center;
  }
`;
