import store from "../../store/store";
import { closeModalInfo, openModalInfo } from "../../store/storeSlices";

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

//Function that convert Date.now() number to minutes
export const milisecondsToMinutes = (miliseconds) => {
  const minutes = Math.floor(miliseconds / 60000);

  return minutes;
};

//Function that take a message and a time in seconds and open modal with message and close it after that time
export const openModalInfoAndClose = (message, time) => {
  store.dispatch(openModalInfo({ msg: message }));
  setTimeout(() => {
    store.dispatch(closeModalInfo());
  }, time * 1000);
};
