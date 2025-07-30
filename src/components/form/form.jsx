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
        if (!text.trim ()) return;
        
        const newQuote = {
            text: text.trim(),
            author: author.trim() || "Anónimo",
    
    };
    if (editingIndex !== null) {
        const updatedQuotes = quotes.map((q, i) => ( i === editingIndex ? newQuote : q));
        updateStorage(updatedQuotes);   
        setEditingIndex(null);
    } else {
        updateStorage([...quotes, newQuote]);
    }
        setText("");
        setAuthor("");
    };
    const handleEdit = (index) => {
        setEditingIndex(index);
        setText(quotes[index].text);
        setAuthor(quotes[index].author === "Anónimo" ? "" : quotes[index].author);
    };   
    const handleDelete = (index) => {
        const updatedQuotes = quotes.filter((_, i) => i !== index);
        updateStorage(updatedQuotes);
        if (editingIndex === index) {
            setEditingIndex(null);
            setText("");
            setAuthor("");
        }
    };
   

    
    return (
        <form onSubmit={handleSubmit} className="quote-form">
        <input
            type="text"
            placeholder="Enter your quote"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="quote-input"
            required
        />
        <input
            type="text"
            placeholder="Enter the author's name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="author-input"
        />
        <button type="submit" className="submit-button">
          {editingIndex !== null ? "Guardar cambios" : "Agregar cita"}
        </button>
        </form>
    );
}

export default Form;
