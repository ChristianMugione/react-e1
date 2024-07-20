import { BsXCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  initCart,
  toggleCart,
  emptyCart,
  processTheCart,
} from "../store/storeSlices";
import { CartItem } from "./CartItem";
import { ModalConfirm } from "./ModalConfirm";
import { useEffect, useState } from "react";
import { StyledCart } from "../styles/CartStyles";

export const Cart = () => {
  //Obtengo la lista de productos del carrito en Redux
  const cartItems = useSelector((state) => state.cartList.products);

  //Obtengo el total de productos del carrito
  const total = useSelector((state) => state.cartList.totalCart);

  const dispatch = useDispatch();

  //Inicializo los states para el modal de confirmación
  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");

  useEffect(() => {}, []);

  //Función para cerrar el carrito cuando clickean el boton de cerrarlo
  const doToggleCart = () => {
    dispatch(toggleCart());
  };

  //Cierra el modal de confirmación al presionar CANCEL
  const closeModal = () => {
    setShowModal(false);
  };

  //Abre el modal de confirmación para vaciar el carrito
  const confirmDeleteAll = () => {
    setModalMsg("¿Desea borrar todos los artículos?");
    setAction("del");
    setShowModal(true);
  };

  //Ejecuta el reducer que vacía el carrito y cierra el modal de confirmación
  const deleteAllItemsFromCart = () => {
    dispatch(emptyCart());
    setShowModal(false);
  };

  //Abre modal de confirmación para finalizar la compra
  const confirmProcessCart = () => {
    setModalMsg("¿Desea finalizar la compra?");
    setAction("process");
    setShowModal(true);
  };

  //Ejecuta el reducer para procesar la compra y cierra el modal de confirmacion
  const processCart = () => {
    dispatch(processTheCart());
    setShowModal(false);
  };

  //Segun la acción confirmada ejecuta la función correspondiente
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
          console.log(item);
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
