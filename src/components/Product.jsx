import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { toCurrency } from "../assets/functions/auxiliar";
import { addItem } from "../store/storeSlices";
import { useState } from "react";
import { ModalConfirm } from "./ModalConfirm";

export const Product = () => {
  const { idProd } = useParams();
  const products = useSelector((state) => state.productList.products);
  const product = products.find((prod) => prod.key == idProd);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const confirmAdd = () => {
    setShowModal(true);
  };

  const cancelAdd = () => {
    setShowModal(false);
  };

  const addToCart = () => {
    dispatch(addItem(product));
    setShowModal(false);
  };

  return (
    <>
      <StyledProductInfo>
        <img src={product.image} alt="product.title" />
        <div className="product-info-txt">
          <h1>{product.title}</h1>
          <p>{toCurrency(product.price)}</p>
          <button onClick={confirmAdd}>Agregar al Carrito</button>
        </div>
        {showModal && (
          <ModalConfirm
            msg="¿Está seguro de agregar el producto?"
            onConfirm={addToCart}
            onCancel={cancelAdd}
          />
        )}
      </StyledProductInfo>
    </>
  );
};

const StyledProductInfo = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  width: 90%;
  height: 100%;

  img {
    width: 90%;
    border-radius: 8px;
  }

  .product-info-txt {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 1.2em;
  }

  p {
    font-size: 1em;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 8px;

    img {
      width: 50%;
    }

    .product-info-txt {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (min-width: 768px) {
    max-width: 720px;

    h1 {
      font-size: 1.4em;
    }

    p {
      font-size: 1.2em;
    }
  }
`;
