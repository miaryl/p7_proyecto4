import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Navbar from "./components/navbar/NavBar.jsx";
import AddQuote from "./components/button/Button.jsx";
import Form from "./components/form/form.jsx";
import ShowQuote from "./components/quotes/Quotes.jsx";
import Bg from "./components/bg/Bg.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(storedQuotes);
    /*setRandomForm(storedQuotes);*/
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

      setError("");

      const newQuote = {
        text: text.trim(),
        author: author.trim() || "Anónimo",
      };

      if (editingIndex !== null) {
        const updatedQuotes = [...quotes];
        updatedQuotes[editingIndex] = newQuote;
        updateStorage(updatedQuotes);
        setEditingIndex(null);
        toast.success("Frase editada correctamente");
      } else {
        const updatedQuotes = [...quotes, newQuote];
        updateStorage(updatedQuotes);
        toast.success("Frase guardada correctamente");
      }

      setText("");
      setAuthor("");
    };

    /*
    const addQuote = (newQuote) => {
      setQuotes(prev => [...prev], {...newQuote, id: crypto.randomUUID()});
    };
*/
    const delateQuote = (id) => {
      setQuotes(prev => [...prev, filter(quotes => quotes.id === id)]);
    };

    const updateQuote = (updatedquote) => {
    setTasks(prev => prev.map(quotes => quotes.id === updatedquote.id ? updatedquote : quotes));
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <header>
        {" "}
        <Navbar />{" "}
      </header>
      <section
        id="inicio"
        className="scroll-mt-25 flex flex-col items-center justify-center gap-1 bg-[#8DBCC7] mt-25 min-h-screen"
      >
        <h1 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl font-bold mb-25 mt-15">
          MOTIVA TU DÍA
        </h1>
        <ShowQuote />
        <AddQuote />
        <Bg />
      </section>

      <section
        id="añadir"
        className="scroll-mt-25 flex flex-col items-center gap-4 bg-[#A4CCD9]"
      >
        <Form
          text={text}
          author={author}
          setText={setText}
          setAuthor={setAuthor}
          handleSubmit={handleSubmit}
          error={error}
        />
      </section>

      <section
        id="misfavoritas"
        className="scroll-mt-32 flex flex-col items-center gap-4 bg-[#C4E1E6]"
      >
        <h2 className="text-xl font-bold mt-10">Mis Frases Favoritas</h2>
        <p>Aquí van tus frases!</p>
      </section>
    </>
  );
}

export default App;
