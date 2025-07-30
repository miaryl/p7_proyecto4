import { useEffect, useState } from "react";
import "./form.css";

function Form () {
    const [quotes, setQuotes] = useState([]);
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [randomQuote, setRandomQuote] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
        setQuotes(storedQuotes);
        setRandomFrom(storedQuotes);
 } 
    , []);

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
            alert("Por favor, añade una frase.");
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
        } else {
            const updatedQuotes = [...quotes, newQuote];
            updateStorage(updatedQuotes);
        }
        
       setText("");
       setAuthor("");
    };

    /*const handleEdit = (index) => {
        const quoteToEdit = quotes[index];
        setText(quoteToEdit.text);
        setAuthor(quoteToEdit.author);
        setEditingIndex(index);
    };
    const handleDelete = (index) => {
        const updatedQuotes = quotes.filter((_, i) => i !== index);
        updateStorage(updatedQuotes);
        setEditingIndex(null);
    };*/
    
   

    
    return (
        <>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
  ¡Dale forma a tu inspiración!
</h2>
        <form onSubmit={handleSubmit} 
        className="quote-form flex flex-col gap-4 w-full max-w-md">
        <input
            type="text"
            placeholder="Frase:"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="quote-input border rounded bg-white py-[50px] mb-9"
            required
        />
        <input
            type="text"
            placeholder="Autor:"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="author-input border rounded bg-white p-2 mb-9"
        />
        <button type="submit" 
        className="rounded bg-white font-bold py-5 px-4 cursor-pointer hover:bg-gray-400">Guardar</button>
        </form>
        </>
    );
}

export default Form;
