import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from './components/navbar/NavBar.jsx'
import AddQuote from './components/button/Button.jsx'
import Form from './components/form/form.jsx'
import ShowQuote from './components/quotes/Quotes.jsx'


function App() {

  return (
    <>
    <header> <Navbar /> </header>
    <section id="inicio" className="scroll-mt-25 mt-40 flex flex-col items-center gap-4">
  <h1 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-bold mb-25 mt-25">
    MOTIVA TU DÍA
  </h1>
      <ShowQuote />
      <AddQuote />
    </section>

    <section id="añadir" className="scroll-mt-32 mt-50 flex flex-col items-center gap-4">
      <Form />
    </section>

    <section id="misfavoritas" className="scroll-mt-32 mt-40 flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold">Mis Frases Favoritas</h2>
        <p>Aquí van tus frases!</p>
    </section>
  </>
  )
}

export default App

