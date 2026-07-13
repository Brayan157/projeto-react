import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Satisfaction from './components/Satisfaction'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'



export default function App(){
  
  return(
    <>
    
      <Header/>
      <Hero/>
      <Reveal direction="up" delay={0.2} duration={0.8}>
        <About/>
      </Reveal>
        <Journey/>
      <Reveal direction="left" delay={0.4} duration={0.8}>
        <Satisfaction/>
      </Reveal>
      <Reveal direction="scale" delay={0.6} duration={0.8}>
        <Clients/>
      </Reveal>
      <Reveal direction="down" delay={0.8} duration={0.8}>
        <Contact/>
      </Reveal>
        <Footer/>
    </>
  )
}

