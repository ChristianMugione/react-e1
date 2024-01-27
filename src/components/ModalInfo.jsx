import { useSelector } from "react-redux";
import { StyledModalInfo } from "../styles/ModalStyles";

export const ModalInfo = () => {
  const modalInfoState = useSelector((state) => state.modalInfo);

  return (
    <StyledModalInfo isOpen={modalInfoState.modalIsOpened}>
      {modalInfoState.modalMsg}
    </StyledModalInfo>
  );
};
