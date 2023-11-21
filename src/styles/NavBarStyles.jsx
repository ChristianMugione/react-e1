import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 48px;
  right: 0;
  background-color: #fafafa50;

  li {
    list-style: none;
    color: steelblue;
  }

  a {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    top: unset;
    right: unset;
    position: relative;
    gap: 12px;
    background-color: transparent;
  }
`;
