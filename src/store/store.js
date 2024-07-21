import { configureStore } from "@reduxjs/toolkit";
import {
  cartOpen,
  menuOpen,
  cartSlice,
  modalInfoSlice,
  productSlice,
  userMenuOpen,
  modalSignupSlice,
  appStatusSlice,
} from "./storeSlices";

export default configureStore({
  reducer: {
    productList: productSlice.reducer,
    cartList: cartSlice.reducer,
    cartOpened: cartOpen.reducer,
    menuOpened: menuOpen.reducer,
    modalInfo: modalInfoSlice.reducer,
    userMenuOpened: userMenuOpen.reducer,
    modalSignup: modalSignupSlice.reducer,
    appStatus: appStatusSlice.reducer,
  },
});
