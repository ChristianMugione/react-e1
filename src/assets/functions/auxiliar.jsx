export const toCurrency = (num) => {
  const formatOptions = {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  };

  const currencyFormat = new Intl.NumberFormat("es-ES", formatOptions);
  const response = currencyFormat.format(num);

  return response;
};
