import { useEffect, useState } from "react";
import "./form.css";

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
            alert("Frase editada correctamente");
        } else {
            const updatedQuotes = [...quotes, newQuote];
            updateStorage(updatedQuotes);
            alert("Frase guardada correctamente");
        }
        
       setText("");
       setAuthor("");

       
    };

    const handleEdit = (index) => {
        const quoteToEdit = quotes[index];
        setText(quoteToEdit.text);
        setAuthor(quoteToEdit.author);
        setEditingIndex(index);
    };
    const handleDelete = (index) => {
        const updatedQuotes = quotes.filter((_, i) => i !== index);
        updateStorage(updatedQuotes);
        setEditingIndex(null);
    };
    
   

    
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
            className="quote-input border rounded bg-white py-[50px] mb-9 pl-2"
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

        
        <div className="quote-list mt-10" >
            <h2 className="text-3xl font-bold mb-4">Mis Frases</h2>
            {quotes.length === 0 ? (
                <p className="text-gray-500">No hay frases guardadas.</p>
            ) : (
                quotes.map((quote, index) => (
                    <div key={index} className="quote-item mb-4 border p-4 rounded">
                        <p className="text-lg">"{quote.text}"</p>
                        <p className="text-sm text-gray-600">- {quote.author}</p>
                        <div className="flex gap-2 mt-2 ">
                            <button onClick={() => onEdit(index)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:underline"  >Editar</button>
                            <button onClick={() => onDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:underline">Eliminar</button>
                        </div>
                    </div>
                )) 
            )}
        </div> 
    

        
        </>
    )
}

export default Form;
