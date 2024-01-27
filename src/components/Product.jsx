import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toCurrency } from "../assets/functions/auxiliar";
import { addItem } from "../store/storeSlices";
import { useState } from "react";
import { ModalConfirm } from "./ModalConfirm";
import { StyledProductInfo } from "../styles/ProductStyles";

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
