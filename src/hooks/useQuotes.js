import { useState, useEffect } from "react";

function useQuotes() {
    const [quotes, setQuotes] = useState(() => {
        const stored = localStorage.getItem("quotes");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("quotes", JSON.stringify(quotes));
    }, [quotes]);

    return [quotes, setQuotes];
}

export default useQuotes;
