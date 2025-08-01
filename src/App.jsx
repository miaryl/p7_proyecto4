import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from './components/navbar/NavBar.jsx'
import AddQuote from './components/button/Button.jsx'
import Form from './components/form/form.jsx'
import ShowQuote from './components/quotes/Quotes.jsx'
import Bg from './components/bg/Bg.jsx'
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <header> <Navbar /> </header>
    <section 
  id="inicio" 
  className="scroll-mt-6 flex flex-col items-center justify-center gap-1 bg-[#8DBCC7] mt-6 min-h-screen"
  >
  <h1 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-bold mb-15 mt-15">
    MOTIVA TU DÍA
  </h1>
  <ShowQuote />
  <AddQuote />
  <Bg />


</section>


    <section id="añadir" className="scroll-mt-25 flex flex-col items-center gap-4 bg-[#A4CCD9]">
      <Form />
    </section>

    <section id="misfavoritas" className="scroll-mt-32 flex flex-col items-center gap-4 bg-[#C4E1E6]">
        <h2 className="text-xl font-bold mt-10">Mis Frases Favoritas</h2>
        <p>Aquí van tus frases!</p>
    </section>
    </>
  )
}

export default App

