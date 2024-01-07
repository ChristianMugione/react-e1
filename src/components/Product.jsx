import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { toCurrency } from "../assets/functions/auxiliar";

export const Product = () => {
  const { idProd } = useParams();
  const products = useSelector((state) => state.productList.products);
  const product = products.find((prod) => prod.key == idProd);

  console.log(product);

  return (
    <>
      <StyledProductInfo>
        <img src={product.image} alt="product.title" />
        <div className="product-info-txt">
          <h1>{product.title}</h1>
          <p>{toCurrency(product.price)}</p>
          <button>Agregar al Carrito</button>
        </div>
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
    h1 {
      font-size: 1.4em;
    }

    p {
      font-size: 1.2em;
    }
  }

  @media (min-width: 992px) {
    max-width: 960px;

    .product-info-txt {
      width: 100%;
    }

    h1 {
      font-size: 1.6em;
    }

    p {
      font-size: 1.4em;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1280px;
  }
`;
