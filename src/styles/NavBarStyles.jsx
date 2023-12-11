import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 70%);

  padding-inline-start: 0;

  li {
    width: 100%;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  li::after {
    width: 80%;
    height: 1px;
    content: " ";
    background: radial-gradient(
      circle,
      rgba(5, 5, 5, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  a {
    font-size: 20px;
    color: #222222;
  }

  @media (min-width: 768px) {
    width: fit-content;
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    top: unset;
    right: unset;
    position: relative;
    gap: 18px;
    background-color: transparent;

    li {
      padding: 0;
    }

    li::after {
      display: none;
    }
  }
`;
