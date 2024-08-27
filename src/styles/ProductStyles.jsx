import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  max-width: 250px;
  /* padding: 8px; */
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa50;
  border-radius: 8px;
  margin: 6px 0;
  gap: 8px;
  overflow: hidden;
  box-shadow: 1px 1px 3px 0 #0005;

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .image {
    /* width: 150px; */
    width: 100%;
    aspect-ratio: 1/1;
    /* border-radius: 8px; */
    /* box-shadow: 0 0 5px 0 black; */
    cursor: pointer;
    // width: 100%;
  }

  .title {
    width: 95%;
    cursor: pointer;
    text-align: center;
  }

  .title,
  .price {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 0.9em;
    color: #1a1a1a;
  }

  .btns {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
  }
`;

export const StyledFeaturedProducts = styled.section`
  width: 100%;
  display: flex;
  gap: 4px;
  margin-top: 20px;
  overflow-x: auto;
  white-space: nowrap;

  .loading {
    background: linear-gradient(45deg, #3f5573, #7395d9);
    color: white;
    padding: 0.5em 1.2em;
    border-radius: 1em;
    margin: 0;
    font-size: 0.8em;

    box-shadow: 0 0 5px 0 black;
  }

  @media (min-width: 576px) {
    justify-content: center;
  }
`;

export const StyledFeaturedProductCard = styled.div`
  background-color: #00000022;
  width: 120px;
  /* border: 1px solid white; */
  border-radius: 4px;
  color: white;
  font-size: 10px;
  padding: 4px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  /* box-shadow: 10px 10px 3px -1px black; */

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    object-position: center;
    border-radius: 2px;
    cursor: pointer;
  }

  h3 {
    margin: 0 2px;
    font-size: 1em;
    font-weight: 300;
    text-transform: uppercase;
    white-space: wrap;
    overflow: hidden;
    cursor: pointer;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-shadow: 1px 1px 1px black;
  }

  .btns {
    display: flex;
    justify-content: space-between;
    gap: 6px;
  }

  button {
    background-color: steelblue;
    transition: all 0.5s;
    /* padding-top: 0; */
    /* padding-bottom: 0; */
    padding-inline: 4px;
    line-height: 1;

    &:hover {
      background-color: white;
      color: steelblue;
      transition: all 0.5s;
    }
  }
`;

export const StyledProductInfo = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  width: 90%;
  height: 100%;

  img {
    width: 90%;
    border-radius: 8px;
  }

  .product-info-txt {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1a1a1a;
  }

  h1 {
    font-size: 1.2em;
  }

  p {
    font-size: 1em;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 8px;

    img {
      width: 50%;
    }

    .product-info-txt {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (min-width: 768px) {
    max-width: 720px;

    h1 {
      font-size: 1.4em;
    }

    p {
      font-size: 1.2em;
    }
  }
`;
