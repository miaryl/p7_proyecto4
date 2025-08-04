import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from './components/navbar/NavBar.jsx'
import AddQuote from './components/button/Button.jsx'
import Form from './components/form/form.jsx'
import ShowQuote from './components/quotes/Quotes.jsx'
import Bg from './components/bg/Bg.jsx'
import { Toaster } from 'react-hot-toast';
import QuoteList from './components/quotes/QuoteList.jsx'
import useQuotes from './hooks/useQuotes.js'
import Footer from './components/footer.jsx'


function App() {
const [quotes, setQuotes] = useQuotes();
  return (
  <>
  <Toaster position="top-center" reverseOrder={false} />
  <header> <Navbar /> </header>
  
<section id="inicio" className="scroll-mt-25 flex flex-col items-center justify-center gap-1 bg-[#8DBCC7] mt-25 min-h-screen">
<h1 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-bold mb-25 mt-15">
    MOTIVA TU DÍA
  </h1>
<ShowQuote />
<AddQuote />
<Bg />
</section>

<section id="añadir" className="scroll-mt-25 flex flex-col items-center gap-4 bg-[#A4CCD9]">
<Form quotes={quotes} setQuotes={setQuotes}/>
</section>

<section id="misfavoritas" className="scroll-mt-32 flex flex-col items-center gap-4  bg-[#C4E1E6]">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-25 mt-20">Mis Frases Favoritas</h2>
<QuoteList quotes={quotes} />
</section>
     <Footer />
</>
)
}

export default App

