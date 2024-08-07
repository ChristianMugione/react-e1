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
    top: unset;
    right: unset;
    position: relative;
    gap: 8px;
    background-color: unset;

    li {
      padding: 0;
      padding: 0 6px;
      border-radius: 8px;
      transition: all 0.5s;
    }

    li:hover {
      background-color: white;
      transition: all 0.5s;
    }

    li::after {
      display: none;
    }
  }
`;
