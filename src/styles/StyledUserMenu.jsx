import styled from "styled-components";

export const StyledUserMenu = styled.div`
  width: 100px;
  background-color: rgba(255, 255, 255, 70%);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 8px 0;
  position: absolute;
  top: 75px;
  right: 10px;

  .user-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    list-style: none;
    padding-inline-start: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #222;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      text-shadow: 0 0 3px #fafafa;
    }
  }

  .modal-signup {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
