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

  const goToProduct = () => {
    navigate(`/product/${index}`);
  };

  return (
    <StyledProduct>
      <div className="product-info" onClick={goToProduct}>
        <img
          className="image"
          src={image ? image : "/imagen-no-disponible.png"}
          alt={title}
        />
        <h3 className="title">{title}</h3>
      </div>
      <div className="btns">
        <p className="price">{toCurrency(price)}</p>
        <button onClick={confirmAdd}>Agregar</button>
        {/* <button onClick={goToProduct}>Ver</button> */}
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
