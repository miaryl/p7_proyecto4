import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

function Form () {
    const [quotes, setQuotes] = useState([]);
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [randomQuote, setRandomQuote] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
        setQuotes(storedQuotes);
        setRandomFrom(storedQuotes);
    }, []);

    const setRandomFrom = (quotes) => {
        if (quotes.length > 0) {            
            const random = quotes[Math.floor(Math.random() * quotes.length)];
            setRandomQuote(random);
        } else {
            setRandomQuote(null);
        }
    };

    const updateStorage = (updatedQuotes) => {
        localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
        setQuotes(updatedQuotes);
        setRandomFrom(updatedQuotes);
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) {
            toast.error("Por favor, añade una frase.");
            return;
        }   
        const newQuote = {
            text: text.trim(),
            author: author.trim() || "Anónimo",
        };

        if (editingIndex !== null) {
            const updatedQuotes = [...quotes];
            updatedQuotes[editingIndex] = newQuote;
            updateStorage(updatedQuotes);
            setEditingIndex(null);
            alert("Frase editada correctamente");
        } else {
            const updatedQuotes = [...quotes, newQuote];
            updateStorage(updatedQuotes);
            toast.success("Frase guardada correctamente");
        }
        
       setText("");
       setAuthor("");
    };

    return (
        <>
<section className="h-screen flex flex-col justify-center items-center px-4">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-25">
    ¡Dale forma a tu inspiración!
  </h2>

  <form
    onSubmit={handleSubmit}
    className="quote-form flex flex-col gap-4 w-full max-w-md mx-auto"
  >
    <input
      type="text"
      placeholder="Frase:"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="quote-input border rounded bg-white py-[50px] mb-9 pl-2 text-base sm:text-lg"
      required
    />
    <input
      type="text"
      placeholder="Autor:"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      className="author-input border rounded bg-white p-2 mb-9 text-base sm:text-lg"
    />
    <button
      type="submit"
      className="w-auto self-center rounded bg-white font-bold cursor-pointer hover:bg-gray-200 px-3 py-2 mb-14 sm:px-4 sm:py-5"
    >
      Guardar
    </button>
  </form>
</section>


        </>
    );
}

export default Form;

