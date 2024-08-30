import { BsXCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  initCart,
  toggleCart,
  emptyCart,
  processTheCart,
  closeCart,
  setOrders,
} from "../store/storeSlices";
import { CartItem } from "./CartItem";
import { ModalConfirm } from "./ModalConfirm";
import { useEffect, useState } from "react";
import { StyledCart } from "../styles/CartStyles";
import { addOrder } from "../assets/functions/dbFncs";

export const Cart = () => {
  //Obtengo la lista de productos del carrito en Redux
  const cartItems = useSelector((state) => state.cartList.products);
  const totalCart = useSelector((state) => state.cartList.totalCart);
  const showCart = useSelector((state) => state.cartOpened.cartIsOpened);
  console.log(showCart);

  useEffect(() => {
    console.log("showCart: ", showCart);
  }, [showCart]);

  //Obtengo el userId del store
  const userId = useSelector((state) => state.appStatus.userId);

  const dispatch = useDispatch();

  //Inicializo los states para el modal de confirmación
  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");

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
  const processCart = async () => {
    try {
      const response = await addOrder(cartItems, totalCart, userId);

      dispatch(processTheCart());

      setShowModal(false);

      dispatch(closeCart());

      dispatch(setOrders([]));
    } catch (error) {
      console.log(error);
    }
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
    <StyledCart style={{ right: showCart ? "0" : "-320px" }}>
      <BsXCircle className="close-btn" onClick={doToggleCart} />
      <h2>Su Carrito{!cartItems.length && " Está Vacío"}</h2>
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((item) => {
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
        {cartItems.length > 0 && (
          <>
            <div>Total: {totalCart}</div>
            <div className="bottom-buttons">
              <button onClick={confirmDeleteAll}>VACIAR CARRITO</button>
              <button onClick={confirmProcessCart}>FINALIZAR COMPRA</button>
            </div>
          </>
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
