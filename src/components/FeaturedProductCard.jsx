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

  const goToProduct = () => {
    navigate(`/product/${index}`);
  };

  return (
    <StyledFeaturedProductCard>
      <div className="top">
        <img src={image} alt="" onClick={goToProduct} />
        <h3 onClick={goToProduct}>{title}</h3>
      </div>
      <div className="btns">
        <p>{toCurrency(price)}</p>
        <button onClick={confirmAdd}>Agregar</button>
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
