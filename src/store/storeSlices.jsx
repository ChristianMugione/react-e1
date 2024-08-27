import { createSlice } from "@reduxjs/toolkit";
import { totalCalc, cartQuantity, addToLS } from "./SlicesFunctions";

export const appStatusSlice = createSlice({
  name: "appStatus",
  initialState: {
    token: window.localStorage.getItem("token") || null,
    loading: false,
    userId: null,
    orders: [],
    blur: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
    },
    setBlur: (state, action) => {
      state.blur = action.payload;
    },
    blurOut: (state) => {
      state.blur = false;
    },
  },
});

export const productSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
  },
  reducers: {
    initializeProductList: (state, action) => {
      state.products = action.payload;
    },
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
      console.log("itemModified: ", itemModified);
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
  initialState: {
    cartIsOpened: false,
    showCart: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.cartIsOpened = !state.cartIsOpened;
    },
    openCart: (state) => {
      state.cartIsOpened = true;
    },
    closeCart: (state) => {
      state.cartIsOpened = false;
    },
    showCartOn: (state) => {
      state.showCart = true;
    },
    showCartOff: (state) => {
      state.showCart = false;
    },
  },
});

export const userMenuOpen = createSlice({
  name: "userMenuOpened",
  initialState: { userMenuIsOpened: false },
  reducers: {
    toggleUserMenu: (state) => {
      state.userMenuIsOpened = !state.userMenuIsOpened;
    },
    closeUserMenu: (state) => {
      state.userMenuIsOpened = false;
    },
  },
});

export const modalInfoSlice = createSlice({
  name: "modalInfo",
  initialState: { modalIsOpened: false, modalMsg: "", good: true },
  reducers: {
    openModalInfo: (state, action) => {
      state.modalIsOpened = true;
      state.modalMsg = action.payload.msg;
      state.good = action.payload.good;
    },
    closeModalInfo: (state) => {
      state.modalIsOpened = false;
      state.modalMsg = "";
      state.good = true;
    },
  },
});

export const menuOpen = createSlice({
  name: "menuOpened",
  initialState: { menuIsOpened: true },
  reducers: {
    menuToggle: (state) => {
      state.menuIsOpened = !state.menuIsOpened;
    },
    openMenu: (state) => {
      state.menuIsOpened = true;
    },
    closeMenu: (state) => {
      if (window.innerWidth < 768) {
        state.menuIsOpened = false;
      }
    },
  },
});

export const modalSignupSlice = createSlice({
  name: "modalSignup",
  initialState: {
    modalIsOpened: false,
    modalIsRegister: true,
  },
  reducers: {
    openModalSignup: (state, action) => {
      state.modalIsOpened = true;
      state.modalIsRegister = action.payload.modalIsRegister;
    },
    closeModalSignup: (state) => {
      state.modalIsOpened = false;
    },
    toggleModalIsRegister: (state) => {
      state.modalIsRegister = !state.modalIsRegister;
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
export const { toggleCart, closeCart, openCart, showCartOn, showCartOff } =
  cartOpen.actions;
export const { toggleUserMenu, closeUserMenu } = userMenuOpen.actions;
export const { menuToggle, openMenu, closeMenu } = menuOpen.actions;
export const { openModalInfo, closeModalInfo } = modalInfoSlice.actions;
export const { initializeProductList } = productSlice.actions;
export const { openModalSignup, closeModalSignup, toggleModalIsRegister } =
  modalSignupSlice.actions;
export const { setLoading, setToken, setUserId, setOrders, setBlur, blurOut } =
  appStatusSlice.actions;
