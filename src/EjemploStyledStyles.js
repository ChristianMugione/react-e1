import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid red;
  font-size: 20px;
  color: red;

  & h4 {
    background-color: steelblue;

    &:hover {
      background-color: salmon;
      color: steelblue;
    }
  }
`;

export const StyledP = styled.p`
  padding: 8px;
  background-color: brown;
  color: white;
`;

export const HeredP = styled(StyledP)`
  color: yellow;
`;
