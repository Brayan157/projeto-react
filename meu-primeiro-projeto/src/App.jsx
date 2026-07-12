import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Satisfaction from './components/Satisfaction'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App(){
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração da animação em milissegundos
      once: true, // Animação ocorre apenas uma vez
      offset: 100, // Distância em pixels antes do elemento entrar na tela para iniciar a animação
    });
  }, []);
  return(
    <>
      <Header/>
      <Hero/>
      <About/>
      <Journey/>
      <Satisfaction/>
    </>
  )
}

