import styled from "styled-components";

export const ModalConfirm = ({ msg, onConfirm, onCancel }) => {
  return (
    <ModalContainerStyled>
      <div className="modal">
        <p>{msg}</p>
        <div className="btns">
          <button onClick={onConfirm}>CONFIRMAR</button>
          <button onClick={onCancel}>CANCELAR</button>
        </div>
      </div>
    </ModalContainerStyled>
  );
};

const ModalContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: #fafafa80;
  /* filter: blur(4px); */

  .modal {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border: 2px solid steelblue;
    border-radius: 12px;
    z-index: 11;

    & p {
      font-size: 20px;
      color: steelblue;
    }

    @media (min-width: 375px) {
      max-width: 370px;
    }

    @media (min-width: 576px) {
      max-width: 480px;
    }

    @media (min-width: 992px) {
      max-width: 680px;
    }
  }

  .btns {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;
