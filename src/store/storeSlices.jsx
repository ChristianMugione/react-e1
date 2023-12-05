import { createSlice } from "@reduxjs/toolkit";

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
  initialState: { products: [] },
  reducers: {
    addItem: (state, action) => {
      const [id, image, title, price] = action.payload;
      state.products = [...state.products, action.payload];
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

export const { addItem } = cartSlice.actions;
export const { toggleCart } = cartOpen.actions;
