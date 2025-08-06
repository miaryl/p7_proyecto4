import { RiEdit2Fill, RiDeleteBin6Line } from 'react-icons/ri';


function QuoteList({ quotes, onEdit, onDelete, onChange, onSave }) {




  if (quotes.length === 0) {
    return <p className="text-center mt-4 mb-25">No hay frases guardadas aún.</p>;
  }

  return (
    <ul className="max-w-xxl w-full px-6 py-6 sm:px-20 space-y-4 mt-10 mb-10">
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
                <div className="flex flex-wrap items-center gap-2 w-full">
                  <input
                    className="min-w-0 flex-[2] border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                    value={quote.text}
                    onChange={(e) => onChange(index, "text", e.target.value)}
                    placeholder="Frase"
                  />
                  <input
                    className="min-w-0 flex-[1] border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                    value={quote.author}
                    onChange={(e) => onChange(index, "author", e.target.value)}
                    placeholder="Autor"
                  />
                  <button
                    className="mt-2 mx-auto sm:ml-auto sm:mt-0 block rounded-md px-3 py-1 text-sm border cursor-pointer transition duration-200 hover:bg-[#EBFFD8]"
                    onClick={() => onSave(index)}
                  >
                    Guardar
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => onEdit(index)}
                    className="p-2 rounded cursor-pointer hover:bg-gray-100 text-black-600 hover:text-blue-400"
                    aria-label="Editar"
                    title="Editar">
                    <RiEdit2Fill size={20} />
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="p-2 rounded cursor-pointer hover:bg-gray-100 text-black-600 hover:text-blue-400"
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
