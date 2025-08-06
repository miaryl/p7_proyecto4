import { RiEdit2Fill, RiDeleteBin6Line } from 'react-icons/ri';


function QuoteList({quotes, onEdit, onDelete, onChange, onSave}) {
 



  if (quotes.length === 0) {
    return <p className="text-center mt-4">No hay frases guardadas aún.</p>;
  }

  return (
    <ul className="max-w-xl w-full px-4 py-6 space-y-4 mt-10 mb-10">
      {[...quotes].reverse().map((quote, i) => {
        const index = quotes.length - 1 - i;
        return (
          <li key={index} className="relative bg-white p-4 rounded shadow"
           style={
            quote.image
            
             ? {
              backgroundImage: `url(${quote.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
             } :{}
             
           }
           
          >
            {quote.image && (
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/60 to-transparent z-0"></div>
          )
            }
            <div className="relative z-10 p-4">
            {quote.editing ? (
              <>
                <input 
                  value={quote.text}
                  onChange={(e) => onChange(index, "text", e.target.value)}
                />
                <input 
                  value={quote.author}
                  onChange={(e) => onChange(index, "author", e.target.value)}
                />
                <button onClick={() => onSave(index)}>Guardar</button>
              </>
            ) : (
              <>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => onEdit(index)}
                    className="p-2 rounded hover:bg-gray-200 text-black-600"
                    aria-label="Editar"
                    title="Editar">
                    <RiEdit2Fill size={20} />
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="p-2 rounded hover:bg-gray-200 text-black-600"
                    aria-label="Eliminar"
                    title="Eliminar">
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
                <p className="text-lg font-semibold">"{quote.text}"</p>
                <p className="text-sm text-right text-black mt-2">– {quote.author}</p>
              </>
            )}
            </div>
          </li>
        );
      })}
    </ul>
  );
  
}

export default QuoteList;
