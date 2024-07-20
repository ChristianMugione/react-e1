import axios from "axios";
import { milisecondsToMinutes } from "./auxiliar";
import store from "../../store/store";
import { closeModalInfo, openModalInfo } from "../../store/storeSlices";

axios.defaults.baseURL = "http://localhost:3000/";

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
  } catch (error) {
    console.log(error);
  }
};
