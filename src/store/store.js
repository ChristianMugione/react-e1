import { configureStore } from "@reduxjs/toolkit";
import {
  cartOpen,
  menuOpen,
  cartSlice,
  modalInfoSlice,
  productSlice,
} from "./storeSlices";

export default configureStore({
  reducer: {
    productList: productSlice.reducer,
    cartList: cartSlice.reducer,
    cartOpened: cartOpen.reducer,
    menuOpened: menuOpen.reducer,
    modalInfo: modalInfoSlice.reducer,
  },
});
