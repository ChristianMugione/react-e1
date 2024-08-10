import styled from "styled-components";

export const StyledOrders = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: linear-gradient(45deg, #3f5573, #7395d9);
  font-size: 18px;

  & h2 {
    margin-top: 70px;
    font-size: 2rem;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

  .orders {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .order {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 20px; */

    h3 {
      color: white;
      font-size: 1.2em;
      text-shadow: 1px 1px 1px black;
      margin: 0;
    }

    p {
      color: white;
      font-size: 1em;
      text-shadow: 1px 1px 1px black;
      margin: 0;
    }

    .items {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: #3f5573 1px solid;
      border-radius: 8px;
    }
  }
`;
