import { BsXCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  initCart,
  toggleCart,
  emptyCart,
  processTheCart,
} from "../store/storeSlices";
import { CartItem } from "./CartItem";
import { ModalConfirm } from "./ModalConfirm";
import { useEffect, useState } from "react";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cartList.products);
  const total = useSelector((state) => state.cartList.totalCart);
  const dispatch = useDispatch();
  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");

  const doToggleCart = () => {
    dispatch(toggleCart());
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmDeleteAll = () => {
    setModalMsg("¿Desea borrar todos los artículos?");
    setAction("del");
    setShowModal(true);
  };

  const deleteAllItemsFromCart = () => {
    dispatch(emptyCart());
    setShowModal(false);
  };

  const confirmProcessCart = () => {
    setModalMsg("¿Desea finalizar la compra?");
    setAction("process");
    setShowModal(true);
  };

  const processCart = () => {
    dispatch(processTheCart());
    setShowModal(false);
  };

  const confirmedAction = () => {
    switch (action) {
      case "del":
        deleteAllItemsFromCart();
        break;
      case "process":
        processCart();
        break;

      default:
        break;
    }
  };

  return (
    <StyledCart>
      <BsXCircle className="close-btn" onClick={doToggleCart} />
      <h2>Su Carrito</h2>

      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.index}
              index={item.index}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}

        {cartItems.length ? (
          <>
            <div>Total: {total}</div>
            <div className="bottom-buttons">
              <button onClick={confirmDeleteAll}>VACIAR CARRITO</button>
              <button onClick={confirmProcessCart}>FINALIZAR COMPRA</button>
            </div>
          </>
        ) : (
          <h2>está vacío</h2>
        )}
      </div>
      {showModal && (
        <ModalConfirm
          msg={modalMsg}
          onConfirm={confirmedAction}
          onCancel={closeModal}
        />
      )}
    </StyledCart>
  );
};

const StyledCart = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  height: 80dvh;
  background-color: azure;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  .close-btn {
    font-size: 22px;
    position: absolute;
    top: 80px;
    right: 20px;
    cursor: pointer;
  }

  h2 {
    margin-top: 80px;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 90%;
  }

  .bottom-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 5px;
  }
`;
