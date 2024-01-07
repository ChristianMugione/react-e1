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
import { NavBarProvider } from "./components/NavBarContext";
import store from "./store/store";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";
import { Product } from "./components/Product";

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <AppWrapper>
          <NavBarProvider>
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
          </NavBarProvider>
        </AppWrapper>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
