import styled from "styled-components";

export const StyledOrders = styled.section`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(45deg, #3f5573, #7395d9);
  font-size: 18px;

  padding-bottom: 20px;

  & h2 {
    margin-top: 100px;
    font-size: 2rem;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

  .orders {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 8px;
  }

  .order-header {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding-inline: 10px;
  }

  .order {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 20px; */
    background-color: white;
    border-radius: 8px;

    h3 {
      color: gray;
      font-size: 1.2em;
      /* text-shadow: 1px 1px 1px black; */
      margin: 0;
    }

    p {
      color: #3f5573;
      font-size: 1em;
      font-weight: 500;
      /* text-shadow: 1px 1px 1px black; */
      margin: 0;
    }

    .item-container {
      width: 100%;
    }

    .item {
      box-sizing: border-box;
      width: 100%;
      display: grid;
      /* flex-direction: column; */
      grid-template-columns: 100px 1fr auto;
      padding: 10px 20px;
      /* justify-content: space-between; */
      align-items: center;
      gap: 10px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 100px 1fr auto;
      }
    }

    .item-image {
      width: 100px;
      height: 100px;
      border: 1px solid lightgray;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        border: none;
        width: 100%;
      }
    }

    .item-image img {
      width: 100%;

      @media (max-width: 768px) {
        height: 100px;
        width: 100px;
        object-fit: cover;
      }
    }

    .item-info {
      text-align: start;
      width: auto;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .item-title {
      //todo
    }

    .item-description {
      //todo
    }

    .item-price {
      text-align: end;
      width: 200px;

      @media (max-width: 768px) {
        text-align: center;
        width: 100%;
      }
    }

    .line {
      width: 100%;
      border-bottom: 1px solid lightgray;
    }

    .totals {
      width: 100%;

      display: flex;
      justify-content: center;
      gap: 10%;
    }
  }
`;
