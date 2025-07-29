import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import ShowQuote from './components/quotes/Quotes.jsx'
import Navbar from './components/navbar/NavBar.jsx'
import AddQuote from './components/button/Button.jsx'

function App() {

  return (
    <>
    <Navbar />
      <h1>MOTIVA TU DÍA</h1>
    <ShowQuote />
    <AddQuote />
         
    </>
  )
}

export default App

