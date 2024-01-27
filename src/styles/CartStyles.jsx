import styled from "styled-components";

export const StyledCart = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  height: 80dvh;
  background-color: azure;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  .close-btn {
    font-size: 22px;
    position: absolute;
    top: 80px;
    right: 20px;
    cursor: pointer;
  }

  h2 {
    margin-top: 80px;
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  gap: 8px;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100px;
    max-width: 15%;
    border-radius: 8px;
  }

  .title {
    max-width: 30%;
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
