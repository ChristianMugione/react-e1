import styled from "styled-components";

export const StyledOrders = styled.section`
  width: 100%;
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
    width: 90%;
    background-color: white;
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

    .items {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
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
