import './App.css'
import { AppWrapper } from './components/AppWrapper'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { GlobalStyles } from './styles/GlobalStyles'


function App() {

  return (
    <AppWrapper>
      <Header />
      <HeroSection />
      
      {/* <EjemploStyled /> */}
    </AppWrapper>
  )
}

export default App
