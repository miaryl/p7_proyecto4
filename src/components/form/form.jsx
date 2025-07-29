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
        if (!text.trim ()) return;
        const newQuote = text.trim();
        const newAuthor = author.trim() || "Anónimo"
      
        
    };
    
   
}
    
    return (
        <form onSubmit={handleSubmit} className="quote-form">
        <input
            type="text"
            placeholder="Enter your quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
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
        <button type="submit" className="submit-button">Add Quote</button>
        </form>
    );
}
export default Form;
export { Form };