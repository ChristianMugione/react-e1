import React, { useState } from "react";
import { StyledProduct } from "../styles/ProductStyles";
import { useDispatch } from "react-redux";
import { addItem } from "../store/storeSlices";
import { ModalConfirm } from "./ModalConfirm";
import { toCurrency } from "../assets/functions/auxiliar";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ index, image, title, price }) => {
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
    <StyledProduct>
      <div className="product-info">
        <img
          className="image"
          src={image ? image : "/imagen-no-disponible.png"}
          alt={title}
        />
        <h3 className="title">{title}</h3>
        <p className="price">{toCurrency(price)}</p>
      </div>
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
    </StyledProduct>
  );
};
