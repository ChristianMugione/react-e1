import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  display: flex;
  padding: 5px 0;
  justify-content: space-between;

  position: fixed;
  top: 0;

  background-color: rgba(235, 235, 255, 95%);

  z-index: 2;

  .nav-cart {
    display: flex;
    align-items: center;
    margin-right: 20px;

    gap: 8px;
  }

  .cart-icon-container {
    position: relative;
    width: 30px;
    height: 30px;
  }

  .cart-icon {
    font-size: 28px;
    color: #222;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
  }

  .item-quantity {
    background-color: red;
    color: white;
    width: 20px;
    height: 20px;
    /* padding: 2px 6px; */
    border-radius: 50%;
    font-size: 12px;
    font-weight: 800;
    position: absolute;
    top: -4px;
    right: -4px;
  }

  .user-icon {
    font-size: 28px;
    color: #222;
    cursor: pointer;
  }

  & img {
    width: 100px;
    margin-left: 20px;
  }

  @media (min-width: 768px) {
    .nav-cart {
      gap: 8px;
    }
  }

  @media (min-width: 992px) {
    top: 5px;
    width: 960px;
    border-radius: 10px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }

  @media (min-width: 1400px) {
    width: 1280px;
  }
`;

export const Blurer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(50, 50, 50, 80%);
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
