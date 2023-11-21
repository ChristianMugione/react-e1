import './App.css'
import { GlobalStyles } from './styles/GlobalStyles'
import { AppWrapper } from './components/AppWrapper'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutUsSection } from './components/AboutUsSection'
import { ServicesSection } from './components/ServicesSection'
import { ProductSection } from './components/ProductSection'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { NavBarProvider } from './components/NavBarContext'

function App() {

  return (
    <AppWrapper>
      <NavBarProvider>
      <Header />
      <Routes>
        <Route path="/" exact element={<HeroSection />} />
        <Route path="/products" exact element={<ProductSection />} />
        <Route path="/aboutus" exact element={<AboutUsSection />} />
        <Route path="/services" exact element={<ServicesSection />} />
      </Routes>
      {/* <HeroSection /> */}
      {/* <ProductSection /> */}
      {/* <AboutUsSection /> */}
      {/* <ServicesSection /> */}
      <Footer />
      </NavBarProvider>
    </AppWrapper>
  )
}

export default App

// 👉 Ahora sí, utilizando context, haremos funcional el menú desplegable del header en responsive.
// 👉 Deberán crear una página de contacto, en la cual tienen que tener al menos un formulario de contacto con los campos "nombre", "apellido" , "email" y "asunto" (por ahora, sin validaciones).
// 👉 Las 3 páginas deben ser full responsive

// Tiempos de entrega 23/11
