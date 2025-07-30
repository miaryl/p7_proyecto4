import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from './components/navbar/NavBar.jsx'
import AddQuote from './components/button/Button.jsx'
import Form from './components/form/form.jsx'


function App() {

  return (
    <>
    <header>  <Navbar /> </header>
    <main className='mt-60 md:mt-30 lg:mt-60 flex flex-col items-center gap-4 min-w-[280px] sm:min-w-[320px]'>
      <h1 className='text-center text-6xl font-bold mb-8'> MOTIVA TU DÍA</h1>
    
    <AddQuote />
    <Form />
    </main>
         
    </>
  )
}

export default App

