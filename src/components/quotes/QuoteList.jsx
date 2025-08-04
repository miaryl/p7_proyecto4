
function QuoteList({ quotes }) {
    if (!quotes || quotes.length === 0) {
        return <p className="text-center mt-4">No hay frases guardadas aún.</p>;
    }

    return (
        <ul className="max-w-xl w-full px-4 py-6 space-y-4 mt-10 mb-10">
            {quotes.map((quote, index) => (
                <li key={index} className="bg-white p-4 rounded shadow">
                    <p className="text-lg font-semibold">"{quote.text}"</p>
                    <p className="text-sm text-right text-gray-600 mt-2">– {quote.author}</p>
                </li>
            ))}
        </ul>
    );
}

export default QuoteList;
