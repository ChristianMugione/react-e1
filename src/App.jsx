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
import { useEffect } from "react";
import { getProducts, validateToken } from "./assets/functions/dbFncs";
import { initializeProductList } from "./store/storeSlices";
import { ModalSignup } from "./components/ModalSignup";

function App() {
  const dispatch = useDispatch();
  const modalIsOpened = useSelector((state) => state.modalSignup.modalIsOpened);
  const appStatus = useSelector((state) => state.appStatus);

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
          <Route path="/*" element={<HeroSection />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </ErrorBoundary>
  );
}

export default App;
