import { useSelector } from "react-redux";
import { StyledModalInfo } from "../styles/ModalStyles";

export const ModalInfo = () => {
  const modalMsg = useSelector((state) => state.modalInfo.modalMsg);
  const modalIsOpened = useSelector((state) => state.modalInfo.modalIsOpened);

  // const modalIsOpened = modalInfoState.modalIsOpened.toString();

  return (
    <StyledModalInfo
      style={modalIsOpened ? { bottom: "0" } : { bottom: "-50px" }}
    >
      {modalMsg}
      {/* bottom: ${(props) => (props.isOpen === "true" ? "0" : "-50px")}; */}
    </StyledModalInfo>
  );
};
