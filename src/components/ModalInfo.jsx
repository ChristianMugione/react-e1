import { useSelector } from "react-redux";
import styled from "styled-components";

export const ModalInfo = () => {
  const modalInfoState = useSelector((state) => state.modalInfo);

  return (
    <StyledModalInfo isOpen={modalInfoState.modalIsOpened}>
      {modalInfoState.modalMsg}
    </StyledModalInfo>
  );
};

const StyledModalInfo = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 25px;
  background-color: darkgreen;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  padding: 8px 0;
  display: flex;
  bottom: ${(props) => (props.isOpen ? "0" : "-50px")};
  transition: all 0.2s;
  justify-content: center;
`;
