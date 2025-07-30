import React from "react";
import { useEffect, useState } from "react";
import "./form.css";

function Form () {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [randomQuote, setRandomQuote] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
        setQuote(storedQuotes);
        setRandomFrom(storedQuotes);
 } 
    , []);
    const setRandomFrom = (quotes) => {
        if (quotes.length > 0) {            
            const randomIndex = quotes[Math.floor(Math.random() * quotes.length)];
            setRandomQuote(randomIndex);
        } else {
            setRandomQuote(null);}
        };
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (quote && author) {
        console.log(`Quote: ${quote}, Author: ${author}`);
        setQuote("");
        setAuthor("");
        }
        if (!text.trim()) {
        const newQuote = text.trim();
        const newAuthor = author.trim() || "Anónimo";

        return newQuote, newAuthor
      
        
        };
    
   
    }
    
    return (
        <>
        <p className="mt-[500px]">Añade aquí tu frase</p>
        <form onSubmit={handleSubmit} 
        className="quote-form flex flex-col gap-4 w-full max-w-md">
        <input
            type="text"
            placeholder="Frase:"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
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
        className="rounded bg-white font-bold py-2 px-4 cursor-pointer hover:bg-gray-400">Añadir frase</button>
        </form>
        </>
    );
}
export default Form;
export { Form };