import styled from "styled-components";

export const FeaturedProductCard = ({ imageUrl, title, price }) => {
  return (
    <StyledFeaturedProductCard>
      <img src={imageUrl} alt="" />
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Agregar</button>
    </StyledFeaturedProductCard>
  );
};

const StyledFeaturedProductCard = styled.div`
  background-color: #000000aa;
  width: 120px;
  border: 1px solid white;
  border-radius: 12px;
  color: white;
  font-size: 10px;
  padding: 4px;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
  }

  h3 {
    margin: 0;
  }

  button {
    background-color: steelblue;
    transition: all 0.5s;

    &:hover {
      background-color: white;
      color: steelblue;
      transition: all 0.5s;
    }
  }
`;
