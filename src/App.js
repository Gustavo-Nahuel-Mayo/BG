import {React, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Css/inicio.css'
import Barra from './components/Barra';
import './Css/navbar.css';
import './Css/footer.css';
import Footer from './components/Footer';
import SeparadorChacra from './components/SeparadorChacra';
import './Css/separationCh.css';
import SeparadorExcursiones from './components/SeparadorExcursiones';
import './Css/separationExcursiones.css';
import SeparationCarta from './components/SeparationCarta';
import './Css/divisores.css';
import './Css/separationCarta.css';
import DivisionBebidas from "./components/DivisionBebidas";
import Bebidas from "./components/Bebidas";
import './Css/newCarousel.css';
import Imperdibles from "./components/Imperdibles";
import Tortas from "./components/Tortas";
import DivisionTorta from "./components/DivisionTorta";
import DivisionImperdibles from "./components/DivisionBebidaFria";
import ExcursionesPage from "./components/ExcursionesPage";
import './Css/excursionesPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Css/escolaresCarousel.css';
import ConocenosPage from "./components/ConocenosPage";
import "./Css/conocenosPage.css";
import ChacraAbiertaPage from "./components/ChacraAbiertaPage";
import "./Css/chacraAbiertaPage.css";








function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, []);
  return (
    <Router>
      <Barra />
        <Routes>
          <Route path='/' element={<div data-aos="fade-down">
            <div data-aos="fade-up">
              <SeparadorChacra /> 
            </div>
            <div data-aos="fade-up">
              <SeparadorExcursiones /> 
            </div>
            <div data-aos="fade-up">
             <SeparationCarta />
            </div>
            
          </div>}></Route>
        </Routes>

        <Routes>
          <Route path="/Carta" element={<div>
            <div data-aos="fade-left">
              <DivisionBebidas />
              <Bebidas />           
            </div>
            <div data-aos="fade-left">
              <DivisionImperdibles />
              <Imperdibles />
            </div>
            <div data-aos="fade-right">
              <DivisionTorta />
              <Tortas />
            </div>
          </div>}></Route>
        </Routes>

        
        <Routes>
          <Route path="/Excursiones" element={<div>
            <ExcursionesPage/>
          </div>}></Route>
        </Routes>

        <Routes>
          <Route path="/Conocenos" element={<div>
            <ConocenosPage/>
          </div>}></Route>
        </Routes>

        <Routes>
          <Route path="/Chacra-Abierta" element={<div>
            <ChacraAbiertaPage/>
          </div>}></Route>
        </Routes>

      <Footer />
    </Router>


  );
}

export default App;
