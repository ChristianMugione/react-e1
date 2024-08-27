import store from "../../store/store";
import {
  closeCart,
  closeModalInfo,
  openCart,
  openModalInfo,
  showCartOff,
  showCartOn,
} from "../../store/storeSlices";

export const toCurrency = (num) => {
  const response = Math.trunc(num * 100) / 100;

  return "$ " + response.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//Function that convert Date.now() number to minutes
export const milisecondsToMinutes = (miliseconds) => {
  const minutes = Math.floor(miliseconds / 60000);

  return minutes;
};

//Function that take a message and a time in seconds and open modal with message and close it after that time
export const openModalInfoAndClose = (message, time, good = true) => {
  store.dispatch(openModalInfo({ msg: message, good }));
  setTimeout(() => {
    store.dispatch(closeModalInfo());
  }, time * 1000);
};

export const closeCartAnimated = () => {
  store.dispatch(showCartOff());
  // setTimeout(() => {
  //   store.dispatch(closeCart());
  // }, 500);
};

export const openCartAnimated = () => {
  // store.dispatch(openCart());
  store.dispatch(showCartOn());
};
