import { useSelector } from "react-redux";
import { StyledModalInfo } from "../styles/ModalStyles";

export const ModalInfo = () => {
  const modalInfo = useSelector((state) => state.modalInfo);

  // const modalIsOpened = modalInfoState.modalIsOpened.toString();

  const modalStyles = {
    bottom: modalInfo.modalIsOpened ? "0" : "-50px",
    backgroundColor: modalInfo.good ? "darkgreen" : "darkred",
  };

  return (
    <StyledModalInfo style={modalStyles}>
      {modalInfo.modalMsg}
      {/* bottom: ${(props) => (props.isOpen === "true" ? "0" : "-50px")}; */}
    </StyledModalInfo>
  );
};
