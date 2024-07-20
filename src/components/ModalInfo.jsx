import { useSelector } from "react-redux";
import { StyledModalInfo } from "../styles/ModalStyles";

export const ModalInfo = () => {
  const modalInfoState = useSelector((state) => state.modalInfo);

  const modalIsOpened = modalInfoState.modalIsOpened.toString();

  return (
    <StyledModalInfo isOpen={modalIsOpened}>
      {modalInfoState.modalMsg}
    </StyledModalInfo>
  );
};
