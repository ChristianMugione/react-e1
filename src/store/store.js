import { configureStore } from "@reduxjs/toolkit";
import {
  cartOpen,
  cartSlice,
  modalInfoSlice,
  productSlice,
} from "./storeSlices";

export default configureStore({
  reducer: {
    productList: productSlice.reducer,
    cartList: cartSlice.reducer,
    cartOpened: cartOpen.reducer,
    modalInfo: modalInfoSlice.reducer,
  },
});
