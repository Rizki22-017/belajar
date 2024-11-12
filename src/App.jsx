
import { Route, Routes } from 'react-router-dom'
import './assets/css/main.css'
import './assets/js/main'
import { HeaderComponent } from './components/HeaderComponent'
import { CatalogDetail } from './pages/CatalogDetail'
import { FooterComponent } from './components/FooterComponent'
import { Portfolio } from './pages/Portfolio'
import { AboutUs } from './pages/AboutUs'


function App() {


  return (
    <>
      <HeaderComponent/>

      <Routes>
        <Route path='/catalog-detail' element={<CatalogDetail/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/about' element={<AboutUs/>} />
      </Routes>

      <FooterComponent/>
    </>
  )
}

export default App
