import axios from "axios";
import { milisecondsToMinutes, openModalInfoAndClose } from "./auxiliar";
import store from "../../store/store";
import {
  closeModalInfo,
  openModalInfo,
  setOrders,
  setToken,
  setUserId,
} from "../../store/storeSlices";
// import dotenv from "dotenv";

// dotenv.config();

// axios.defaults.baseURL = "https://ruta-camper-backend.vercel.app/";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

console.log("baseURL: ", axios.defaults.baseURL);

export const getProducts = async () => {
  const productsFromLS = window.localStorage.getItem("products");
  const productsAgeFromLS = window.localStorage.getItem("productsAge");

  if (
    0 === 1 && //sacar esto, es para probar
    productsFromLS &&
    milisecondsToMinutes(Date.now()) - milisecondsToMinutes(productsAgeFromLS) <
      10
  ) {
    return JSON.parse(productsFromLS);
  } else {
    const config = {
      headers: {
        Authorization: "admin",
      },
    };
    const products = await axios.get("/productlist", config);
    window.localStorage.setItem("products", JSON.stringify(products.data));
    window.localStorage.setItem("productsAge", Date.now());

    return products.data.products;
  }
};

export const addUser = async (user) => {
  const newUser = {
    name: user.usuario,
    email: user.email,
    password: user.password,
    role: "user",
  };
  try {
    const response = await axios.post("/adduser", newUser);
    store.dispatch(openModalInfo({ msg: "Usuario creado" }));
    setTimeout(() => {
      store.dispatch(closeModalInfo());
    }, 5000);
    return response.data;
  } catch (error) {
    store.dispatch(openModalInfo({ msg: "Error al registrar usuario" }));
    setTimeout(() => {
      store.dispatch(closeModalInfo());
    }, 5000);
  }
};

export const loginUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post("/login", userData);
    //Guardaar datos del usuario y token en Redux y LS
    console.log(response.data);
    window.localStorage.setItem("token", response.data.token);
    window.localStorage.setItem("userId", response.data.userId);
    store.dispatch(setToken(response.data.token));
    store.dispatch(setUserId(response.data.userId));
    openModalInfoAndClose("Ingreso correcto", 3, true);
  } catch (error) {
    console.log(error);
    openModalInfoAndClose("Ingreso incorrecto", 3, false);
  }
};

export const validateToken = async (token) => {
  try {
    const response = await axios.get(`/verifytoken/${token}`);

    console.log("AEAEAEAE ---- ", response.data.message._doc);

    const userInfo = {
      id: response.data.message._doc._id,
      name: response.data.message._doc.name,
      email: response.data.message._doc.email,
      role: response.data.message._doc.role,
    };

    return userInfo || false;
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const addOrder = async (cartItems, totalCart, userId) => {
  const shippingCost = (totalCart * 5) / 100;

  const items = cartItems.map((item) => {
    return {
      title: item.title,
      id: item.index,
      description: item.title,
      price: item.price,
      quantity: item.quantity,
    };
  });

  const total = parseInt((totalCart + shippingCost) * 100) / 100;

  const order = {
    userId: userId,
    items: items,
    price: totalCart,
    shippingDetail: {
      name: "Carlos Perez",
      address: "Sronson 333",
      location: "Bahia Blanca",
      phone: "2914616154",
    },
    total,
  };

  try {
    const response = await axios.post("/order", order);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (userId) => {
  if (!userId) return;
  try {
    const response = await axios.get(`/orders/${userId}`);
    store.dispatch(setOrders(response.data));
    window.localStorage.setItem("orders", JSON.stringify(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
