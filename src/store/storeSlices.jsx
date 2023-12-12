import { createSlice } from "@reduxjs/toolkit";
import { totalCalc, cartQuantity } from "./SlicesFunctions";

const initialState = {
  products: [
    {
      key: "1",
      image: "/linterna-led.jpg",
      title: "Linternaaa LED portátil de emergencia para exteriores",
      category: "iluminacion",
      price: 56628.63,
    },
    {
      key: "2",
      image: "/image.jpeg",
      title: "Taza de titanio para acampar",
      category: "cocina",
      price: 14087.77,
    },
    {
      key: "3",
      image: "/barbacoa-redonda.webp",
      title: "Parrilla de barbacoa de acero inoxidable",
      category: "cocina",
      price: 69963.45,
    },
    {
      key: "4",
      image: "/paneles-solares-portatiles.webp",
      title: "Batería de Panel Solar USB plegable para exteriores",
      category: "iluminacion",
      price: 66041.36,
    },
    {
      key: "5",
      image: "/1693894715446-179c52f58d9e4f94aa856668f9f991f8-goods.webp",
      title: "Alicates plegables multifuncionales",
      category: "herramientas",
      price: 12232.88,
    },
    {
      key: "6",
      image:
        "/Estufa-de-tres-cabezas-port-til-para-exteriores-estufa-de-Camping-a-prueba-de-viento-quemador.webp",
      title: "Estufa de tres cabezas portátil para exteriores",
      category: "cocina",
      price: 25192.69,
    },
    {
      key: "7",
      image: "/img/colchoneta.webp",
      title: "Colchoneta Inflable Remmo Almohada Camping Liviana 1 Plaza Color Verde",
      category: "varios",
      price: 41365.32,
    },
    {
      key: "8",
      image: "/img/inflador.webp",
      title: "Inflador manual portátil Bestway 62002 color negro 10psi",
      category: "varios",
      price: 4158.25,
    },
    {
      key: "9",
      image: "/img/kit.webp",
      title: "Kit Táctico De Supervivencia 10 En 1 Camping Color Negro",
      category: "herramientas",
      price: 12599.10,
    },
    {
      key: "10",
      image: "/img/carrito.webp",
      title: "Carrito Mesa De Playa Portátil Plegable Aluminio Mor Color Azul",
      category: "varios",
      price: 53207.30,
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
