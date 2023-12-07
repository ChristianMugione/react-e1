import { BsXCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleCart } from "../store/storeSlices";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cartList.products);
  const total = useSelector((state) => state.cartList.totalCart);
  const dispatch = useDispatch();

  const doToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <StyledCart>
      <BsXCircle className="close-btn" onClick={doToggleCart} />
      <h2>Su Carrito</h2>
      
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <CartItem
            key = {item.index}
            index = {item.index}
            image = {item.image}
            title = {item.title}
            price = {item.price}
            quantity = {item.quantity}
            />
            );
          })}

          
        <div>Total: {total}</div>
      </div>

    </StyledCart>
  );
};

const StyledCart = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100dvh;
  background-color: azure;
  padding: 30px 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  .close-btn {
    font-size: 22px;
    position: absolute;
    top: 80px;
    right: 20px;
    cursor: pointer;
  }

  h2 {
    margin-top: 60px;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
`;
