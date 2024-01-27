import { ModalContainerStyled } from "../styles/ModalStyles";

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
