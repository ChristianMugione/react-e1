import React from "react";

export const CartItem = ({ index, image, title, price }) => {
  return (
    <>
      {console.log(index, image, title, price)}
      <img src={image} alt={title} />
      <p>titulo: {title}</p>
      <p>precio: {price}</p>
    </>
  );
};
