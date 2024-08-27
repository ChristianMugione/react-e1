import "./App.css";
import { AppWrapper } from "./components/AppWrapper";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutUsSection } from "./components/AboutUsSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProductSection } from "./components/ProductSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import store from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";
import { Product } from "./components/Product";
import { useCallback, useEffect } from "react";
import { getProducts, validateToken } from "./assets/functions/dbFncs";
import {
  closeCart,
  initializeProductList,
  setUserId,
} from "./store/storeSlices";
import { ModalSignup } from "./components/ModalSignup";
import { Orders } from "./components/Orders";
import { Blurer } from "./components/Blurer";
import { Cart } from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  const modalIsOpened = useSelector((state) => state.modalSignup.modalIsOpened);
  const appStatus = useSelector((state) => state.appStatus);
  const isCartOpened = useSelector((state) => state.cartOpened.cartIsOpened);

  useEffect(() => {
    //si hay token que lo valide al back. si no se valida que lo seteeen null en el store
    if (appStatus.token) {
      const validateTokenFnc = async () => {
        const response = await validateToken(appStatus.token);
        console.log("response: ", response);
        if (!response) {
          dispatch(setToken(null));
          window.localStorage.removeItem("token");
          console.log("token invalido");
        }
        console.log("token valido");
        window.localStorage.setItem("user-info", JSON.stringify(response));
        window.localStorage.setItem("userId", response.id);
        store.dispatch(setUserId(response.id));
      };
      validateTokenFnc();
    }
  }, [appStatus]);

  useEffect(() => {
    const getProductsFnc = async () => {
      const products = await getProducts();
      dispatch(initializeProductList(products));
    };

    getProductsFnc();
  }, []);

  //userEffect que obtenga userId de localStorage y lo setee en el store en caso de que exista
  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    if (userId && userId !== "null" && userId !== "undefined") {
      store.dispatch(setUserId(userId));
    } else {
      store.dispatch(setUserId(null));
    }
  }, []);

  const marianoClose = useCallback(() => {
    // closeCartAnimated();
    store.dispatch(closeCart());
  }, []);

  useEffect(() => {
    if (isCartOpened) {
      window.addEventListener("scroll", marianoClose);
    } else {
      window.removeEventListener("scroll", marianoClose);
    }
  }, [isCartOpened]);

  return (
    <ErrorBoundary>
      <AppWrapper>
        {modalIsOpened && <ModalSignup />}
        <Header />
        <Routes>
          <Route path="/" exact element={<HeroSection />} />
          <Route path="/products" element={<ProductSection />} />
          <Route path="/product/:idProd" element={<Product />} />
          <Route path="/aboutus" element={<AboutUsSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/*" element={<HeroSection />} />
        </Routes>
        <Footer />
        {isCartOpened && <Blurer />}
        {/* {isCartOpened && <Cart />} */}
        <Cart />
      </AppWrapper>
    </ErrorBoundary>
  );
}

export default App;
