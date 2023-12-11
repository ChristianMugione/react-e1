import styled from "styled-components";

export const StyledProductSection = styled.div`
  background-color: aliceblue;
  /* padding: 20px 0; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: linear-gradient(45deg, #3f5573, #7395d9);

  h2 {
    margin-top: 60px;
    font-size: 1.5em;
  }

  button {
    padding: 4px;
    font-size: 0.8em;
    margin: 0 2px;
  }

  .cards {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  @media (min-width: 576px) {
    h2 {
      font-size: 1.8em;
    }

    button {
      font-size: 1em;
      padding: 6px;
    }
  }
`;
