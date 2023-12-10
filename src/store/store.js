import { configureStore } from "@reduxjs/toolkit";
import { cartOpen, cartSlice, productSlice } from "./storeSlices";

export default configureStore({
  reducer: {
    productList: productSlice.reducer,
    cartList: cartSlice.reducer,
    cartOpened: cartOpen.reducer,
  },
});
