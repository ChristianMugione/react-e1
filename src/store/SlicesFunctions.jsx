export const totalCalc = (productArray) => {
  let response = 0;
  productArray.map((item) => {
    response += item.price * item.quantity;
  });
  console.log(response);
  return Number.parseFloat(response).toFixed(2);
};
