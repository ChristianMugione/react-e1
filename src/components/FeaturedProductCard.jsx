import { useState } from "react";
import { ModalConfirm } from "./ModalConfirm";
import { addItem } from "../store/storeSlices";
import { useDispatch } from "react-redux";
import { toCurrency } from "../assets/functions/auxiliar";
import { useNavigate } from "react-router-dom";
import { StyledFeaturedProductCard } from "../styles/ProductStyles";

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
