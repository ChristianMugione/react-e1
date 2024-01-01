export const totalCalc = (productArray) => {
  let response = 0;
  productArray.map((item) => {
    response += item.price * item.quantity;
  });

  return Number.parseFloat(response).toFixed(2);
};

export const cartQuantity = (productArray) => {
  let response = 0;
  productArray.map((item) => {
    response += item.quantity;
  });

  return response;
};

export const addToLS = (cartItems) => {
  localStorage.setItem("cart-items", JSON.stringify(cartItems));
};
