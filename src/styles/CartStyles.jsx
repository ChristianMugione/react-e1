import styled from "styled-components";

export const StyledCart = styled.div`
  position: fixed;
  top: 0;
  /* right: -100px; */
  width: 320px;
  height: 100dvh;
  background-color: #e4e6fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  box-shadow: 0 0 3px gray;
  transition: all 0.5s;
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }

  .close-btn {
    font-size: 22px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  h2 {
    /* margin-top: 80px; */
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 90%;
  }

  .bottom-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 5px;
  }
`;

export const CartItemStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* padding-right: 8px; */
  /* gap: 8px; */
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 6px;
  overflow: hidden;
  color: black;

  img {
    width: 100%;
    height: 100px;
    margin-left: unset;
    object-fit: cover;
    /* max-width: 15%; */
    /* border-radius: 8px; */
  }

  .title {
    max-width: 95%;
    font-size: 0.8em;
    /* font-weight: bold; */
    text-transform: uppercase;
    font-weight: bold;
  }

  .quantity {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  button {
    padding: 2px;
    background-color: white;
    color: black;
    width: 20px;
  }

  .trash {
    cursor: pointer;
  }
`;
