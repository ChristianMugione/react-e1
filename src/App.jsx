import './App.css'
import { GlobalStyles } from './styles/GlobalStyles'
import { AppWrapper } from './components/AppWrapper'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutUsSection } from './components/AboutUsSection'
import { ServicesSection } from './components/ServicesSection'
import { ProductSection } from './components/ProductSection'
import { Footer } from './components/Footer'

// falta: 
// footer
// full responsive

function App() {

  return (
    <AppWrapper>
      <Header />
      <HeroSection />
      <ProductSection />
      <AboutUsSection />
      <ServicesSection />
      <Footer />
    </AppWrapper>
  )
}

export default App
