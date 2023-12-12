import { createSlice } from "@reduxjs/toolkit";
import { totalCalc, cartQuantity } from "./SlicesFunctions";

const initialState = {
  products: [
    {
      key: "1",
      image: "/linterna-led.jpg",
      title: "Linternaaa LED portátil de emergencia para exteriores",
      category: "iluminacion",
      price: 6628.63,
    },
    {
      key: "2",
      image: "/image.jpeg",
      title: "Taza de titanio para acampar",
      category: "cocina",
      price: 4087.77,
    },
    {
      key: "3",
      image: "/barbacoa-redonda.webp",
      title: "Parrilla de barbacoa de acero inoxidable",
      category: "cocina",
      price: 9963.45,
    },
    {
      key: "4",
      image: "/paneles-solares-portatiles.webp",
      title: "Batería de Panel Solar USB plegable para exteriores",
      category: "iluminacion",
      price: 6041.36,
    },
    {
      key: "5",
      image: "/1693894715446-179c52f58d9e4f94aa856668f9f991f8-goods.webp",
      title: "Alicates plegables multifuncionales",
      category: "herramientas",
      price: 2232.88,
    },
    {
      key: "6",
      image:
        "/Estufa-de-tres-cabezas-port-til-para-exteriores-estufa-de-Camping-a-prueba-de-viento-quemador.webp",
      title: "Estufa de tres cabezas portátil para exteriores",
      category: "cocina",
      price: "5192.69",
    },
  ],
};

export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    // guardarMiNombre: (state, action) => {
    //   state.miNombre = action.payload;
    // },
  },
});

export const cartSlice = createSlice({
  name: "cartList",
  initialState: { products: [], totalCart: 0, quantityCart: 0 },
  reducers: {
    addItem: (state, action) => {
      const { index, image, title, price } = action.payload;
      if (state.products.some((item) => item.index === index)) {
        const itemModified = state.products.find(
          (item) => item.index === index,
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
    },
    subsItem: (state, action) => {
      const itemModified = state.products.find(
        (item) => item.index === action.payload,
      );
      if (itemModified.quantity > 1) {
        itemModified.quantity -= 1;
        // state.totalCart -= itemModified.price;
        state.totalCart = totalCalc(state.products);
        state.quantityCart = cartQuantity(state.products);
      }
      // console.log(state.products);
    },
    addOneMoreItem: (state, action) => {
      const itemModified = state.products.find(
        (item) => item.index === action.payload,
      );
      itemModified.quantity += 1;
      // state.totalCart += itemModified.price;
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
    },
    removeOneItem: (state, action) => {
      const newCartItems = state.products.filter(
        (item) => item.index !== action.payload,
      );
      state.products = [...newCartItems];
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
    },
    emptyCart: (state) => {
      state.products = [];
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
    },
    processTheCart: (state) => {
      state.products = [];
      state.totalCart = totalCalc(state.products);
      state.quantityCart = cartQuantity(state.products);
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

export const {
  addItem,
  subsItem,
  addOneMoreItem,
  removeOneItem,
  emptyCart,
  processTheCart,
} = cartSlice.actions;
export const { toggleCart } = cartOpen.actions;
