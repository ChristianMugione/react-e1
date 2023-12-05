import { BsXCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import styled from "styled-components"

export const Cart = () => {
  const cartItems = useSelector(state => state.cartList.products)

  return (
    <StyledCart>
      <BsXCircle className="close-btn" onClick={toggleCart} />
    <h2>Su Carrito</h2>
    <p>{cartItems}</p>

    </StyledCart>
  )
}

const StyledCart = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100dvh;
  background-color: azure;
  padding: 30px 0;
  z-index: 0;

  .close-btn {
    font-size: 22px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  h2 {
    margin-top: 60px;
  }
`;