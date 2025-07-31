import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from './components/navbar/NavBar.jsx'
import AddQuote from './components/button/Button.jsx'
import Form from './components/form/form.jsx'
import ShowQuote from './components/quotes/Quotes.jsx'
import Bg from './components/bg/Bg.jsx'


function App() {

  return (
    <>
    <header> <Navbar /> </header>
    <section 
  id="inicio" 
  className="scroll-mt-25 flex flex-col items-center justify-center gap-1 bg-[#8DBCC7] mt-25 min-h-screen"
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
    </>
  )
}

export default App

