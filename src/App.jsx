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
import store from './store/store'
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <NavBarProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<HeroSection />} />
            <Route path="/products" element={<ProductSection />} />
            <Route path="/aboutus" element={<AboutUsSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </NavBarProvider>
      </AppWrapper>
    </Provider>
  );
}

export default App;

// 👉 Deberán crear una página de contacto, en la cual tienen que tener al menos un formulario de contacto con los campos "nombre", "apellido" , "email" y "asunto" (por ahora, sin validaciones).
// 👉 Las 3 páginas deben ser full responsive

// Tiempos de entrega 23/11
