import { createSlice } from "@reduxjs/toolkit";
import { totalCalc, cartQuantity, addToLS } from "./SlicesFunctions";
import { INITIAL_STATE } from "./data";

const initialState = INITIAL_STATE;

export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    //
  },
});

export const cartSlice = createSlice({
  name: "cartList",
  initialState: { products: [], totalCart: 0, quantityCart: 0 },
  reducers: {
    initCart: (state, action) => {
      state.products = action.payload;
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
    },
    addItem: (state, action) => {
      const { index, image, title, price } = action.payload;
      if (state.products.some((item) => item.index === index)) {
        const itemModified = state.products.find(
          (item) => item.index === index
        );
        itemModified.quantity += 1;
      } else {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
      }
      // state.totalCart += price;
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
      addToLS(state.products);
    },
    subsItem: (state, action) => {
      const itemModified = state.products.find(
        (item) => item.index === action.payload
      );
      if (itemModified.quantity > 1) {
        itemModified.quantity -= 1;
        // state.totalCart -= itemModified.price;
        state.totalCart = totalCalc(state.products);
        state.quantityCart = cartQuantity(state.products);
        addToLS(state.products);
      }
      // console.log(state.products);
    },
    addOneMoreItem: (state, action) => {
      const itemModified = state.products.find(
        (item) => item.index === action.payload
      );
      itemModified.quantity += 1;
      // state.totalCart += itemModified.price;
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
      addToLS(state.products);
    },
    removeOneItem: (state, action) => {
      const newCartItems = state.products.filter(
        (item) => item.index !== action.payload
      );
      state.products = [...newCartItems];
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
      addToLS(state.products);
    },
    emptyCart: (state) => {
      state.products = [];
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
      addToLS(state.products);
    },
    processTheCart: (state) => {
      state.products = [];
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
      addToLS(state.products);
    },
  },
});

export const cartOpen = createSlice({
  name: "cartOpened",
  initialState: { cartIsOpened: false },
  reducers: {
    toggleCart: (state) => {
      state.cartIsOpened = !state.cartIsOpened;
    },
  },
});

export const modalInfoSlice = createSlice({
  name: "modalInfo",
  initialState: { modalIsOpened: false, modalMsg: "" },
  reducers: {
    openModalInfo: (state, action) => {
      state.modalIsOpened = true;
      state.modalMsg = action.payload.msg;
    },
    closeModalInfo: (state) => {
      state.modalIsOpened = false;
      state.modalMsg = "";
    },
  },
});

export const {
  initCart,
  addItem,
  subsItem,
  addOneMoreItem,
  removeOneItem,
  emptyCart,
  processTheCart,
} = cartSlice.actions;
export const { toggleCart } = cartOpen.actions;
export const { openModalInfo, closeModalInfo } = modalInfoSlice.actions;
