import { useState } from "react";
import styled from "styled-components";
import { ModalConfirm } from "./ModalConfirm";
import { addItem } from "../store/storeSlices";
import { useDispatch } from "react-redux";
import { toCurrency } from "../assets/functions/auxiliar";
import { useNavigate } from "react-router-dom";

export const FeaturedProductCard = ({ index, image, title, price }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const confirmAdd = () => {
    setShowModal(true);
  };

  const addToCart = () => {
    const newItem = { index, image, title, price };
    dispatch(addItem(newItem));
    setShowModal(false);
  };

  const cancelAdd = () => {
    setShowModal(false);
  };

  return (
    <StyledFeaturedProductCard>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{toCurrency(price)}</p>
      <div className="btns">
        <button onClick={confirmAdd}>Agregar</button>
        <button
          onClick={() => {
            navigate(`/product/${index}`);
          }}
        >
          Ver
        </button>
      </div>

      {showModal && (
        <ModalConfirm
          msg="¿Está seguro de agregar el producto?"
          onConfirm={addToCart}
          onCancel={cancelAdd}
        />
      )}
    </StyledFeaturedProductCard>
  );
};

const StyledFeaturedProductCard = styled.div`
  background-color: #000000aa;
  width: 120px;
  border: 1px solid white;
  border-radius: 12px;
  color: white;
  font-size: 10px;
  padding: 4px;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
  }

  h3 {
    margin: 0;
  }

  .btns {
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  button {
    background-color: steelblue;
    transition: all 0.5s;

    &:hover {
      background-color: white;
      color: steelblue;
      transition: all 0.5s;
    }
  }
`;
