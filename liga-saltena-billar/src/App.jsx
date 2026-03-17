import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Trending from './components/Trending'
import Institucional from './components/Institucional'
import Campeonatos from './components/Campeonatos'
import Instituciones from './components/Instituciones'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header scrollY={scrollY} />
      <Hero />
      <main>
        <Trending />
        <Institucional />
        <Campeonatos />
        <Instituciones />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
