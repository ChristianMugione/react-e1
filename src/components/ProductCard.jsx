import React, { useState } from "react";
import { StyledProduct } from "../styles/ProductStyles";
import { useDispatch } from "react-redux";
import { addItem } from "../store/storeSlices";
import { ModalConfirm } from "./ModalConfirm";

export const ProductCard = ({ index, image, title, price }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

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
    <StyledProduct>
      <div className="product-info">
        <img
          className="image"
          src={image ? image : "/imagen-no-disponible.png"}
          alt={title}
        />
        <h3 className="title">{title}</h3>
        <p className="price">ARS {price}</p>
      </div>
      <button onClick={confirmAdd}>Agregar</button>
      {showModal && (
        <ModalConfirm
          msg="¿Está seguro de agregar el producto?"
          onConfirm={addToCart}
          onCancel={cancelAdd}
        />
      )}
    </StyledProduct>
  );
};
