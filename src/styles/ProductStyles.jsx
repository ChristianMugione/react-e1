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
