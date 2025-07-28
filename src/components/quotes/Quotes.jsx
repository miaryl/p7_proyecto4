import React from 'react';
import "./Quotes.css";
import quotes from "./quotes.json";

const Quotes = () => {
    const [randomQuote, setRandomQuote] = React.useState(null);

    React.useEffect(() => {
        const index = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[index]);
    }, []);

    if (!randomQuote) return null;

    return (
        <div className="quotes-container"> 
            <div className="quote-card">
                <p className="quote-text">"{randomQuote.Quote}"</p>
                <p className="quote-author"> - {randomQuote.Author}</p>
                </div>
    
        </div>
        );
        };

export default Quotes;
