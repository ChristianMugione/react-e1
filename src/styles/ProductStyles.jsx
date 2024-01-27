import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafafa50;
  border-radius: 8px;
  margin: 6px 0;
  gap: 8px;

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .image {
    width: 150px;
    aspect-ratio: 1/1;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 black;
    // width: 100%;
  }

  .title,
  .price {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }
`;

export const StyledFeaturedProducts = styled.section`
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

export const StyledFeaturedProductCard = styled.div`
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
    height: 80px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
  }

  h3 {
    margin: 0;
  }

  .btns {
    display: flex;
    justify-content: center;
    gap: 6px;
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
