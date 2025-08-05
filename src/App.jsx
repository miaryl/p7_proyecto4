import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from './components/NavBar.jsx'
import AddQuote from './components/Button.jsx'
import Form from './components/form/form.jsx'
import ShowQuote from './components/quotes/Quotes.jsx'
import Bg from './components/bg/Bg.jsx'
import { useEffect, useState } from "react"
import QuoteList from './components/quotes/QuoteList.jsx'
import { Toaster, toast } from 'react-hot-toast';
import Footer from './components/footer.jsx'


function App() {
  const [quotes, setQuotes] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(storedQuotes);
  }, []);

  const updateStorage = (updatedQuotes) => {
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
    setQuotes(updatedQuotes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Por favor, añade una frase.");
      return;
    }


    const newQuote = {
      text: text.trim(),
      author: author.trim() || "Anónimo",
      editing: false
    };

    const updatedQuotes = [...quotes, newQuote];
    updateStorage(updatedQuotes);

    setText("");
    setAuthor("");
    setError("");
    toast.success("Frase guardada correctamente");

    const goToMisFrases = document.getElementById("misfavoritas");

    if (goToMisFrases) {
      goToMisFrases.scrollIntoView({ behavior: "smooth" });
    }
  };


  const toggleEdit = (index) => {
    const updatedQuotes = quotes.map((quote, i) =>
      i === index ? { ...quote, editing: !quote.editing } : quote
    );
    setQuotes(updatedQuotes);
  };

  const handleEdit = (index, field, value) => {
    const updatedQuotes = [...quotes];

    updatedQuotes[index][field] = value;
    setQuotes(updatedQuotes);
  };

  const saveEdit = (index) => {
    const updatedQuotes = [...quotes];

    if (!updatedQuotes[index].author.trim()) {
      updatedQuotes[index].author = 'Anónimo';
    }
    updatedQuotes[index].editing = false;
    updateStorage(updatedQuotes);
    toast.success("Frase editada");
  }

  const handleDelete = (index) => {
    const updatedQuotes = quotes.filter((_, i) => i !== index);
    updateStorage(updatedQuotes);
    toast.success("Frase eliminada");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <header> <Navbar /> </header>

      <section id="inicio" className="scroll-mt-25 flex flex-col items-center justify-center gap-1 bg-[#8DBCC7] mt-25 min-h-screen">
        <h1 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-bold mb-25 mt-15">
          MOTIVA TU DÍA</h1>
        <ShowQuote />
        <AddQuote />
        <Bg />
      </section>

      <section id="añadir" className="scroll-mt-32 flex flex-col items-center gap-4 bg-[#A4CCD9]">
        <Form
          text={text}
          author={author}
          setText={setText}
          setAuthor={setAuthor}
          handleSubmit={handleSubmit}
          error={error}
        />
      </section>

      <section id="misfavoritas" className="scroll-mt-32 flex flex-col items-center gap-4 bg-[#C4E1E6]">
        <h2 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-bold mb-10 mt-20">Mis Frases<br className="block sm:hidden" /> Favoritas</h2>
        <QuoteList
          quotes={quotes}
          onEdit={toggleEdit}
          onDelete={handleDelete}
          onChange={handleEdit}
          onSave={saveEdit}
        />
      </section>
      <Footer />
    </>
  )
}

export default App;
