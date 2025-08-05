import { RiEdit2Fill, RiDeleteBin6Line } from 'react-icons/ri';


function QuoteList({ quotes, onEdit, onDelete, onChange, onSave }) {




  if (quotes.length === 0) {
    return <p className="text-center mt-4 mb-25">No hay frases guardadas aún.</p>;
  }

  return (
    <ul className="max-w-xxl w-full p-6 sm:p-25 space-y-4 mt-10 mb-10">
      {[...quotes].reverse().map((quote, i) => {
        const index = quotes.length - 1 - i;
        return (
          <li key={index} className="bg-white p-8 rounded shadow">
            {quote.editing ? (
              <>
                <div className="flex flex-col gap-4 mb-4 sm:flex-row">
                  <input
                    value={quote.text}
                    onChange={(e) => onChange(index, "text", e.target.value)}
                    className="flex-grow border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                    placeholder="Frase"
                  />
                  <input
                    value={quote.author}
                    onChange={(e) => onChange(index, "author", e.target.value)}
                    className="w-32 border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                    placeholder="Autor"
                  />
                  <button
                    onClick={() => onSave(index)}
                    className="rounded-md px-3 py-1 text-sm border cursor-pointer transition duration-200 hover:bg-[#EBFFD8]"
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
                    className="p-2 cursor-pointer rounded hover:bg-gray-100 text-black-600 hover:text-blue-400"
                    aria-label="Editar"
                    title="Editar">
                    <RiEdit2Fill size={20} />
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="p-2 cursor-pointer rounded hover:bg-gray-100 text-black-600 hover:text-blue-400"
                    aria-label="Eliminar"
                    title="Eliminar">
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
                <p className="text-lg font-semibold">"{quote.text}"</p>
                <p className="text-sm text-right text-gray-600 mt-2">– {quote.author}</p>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );

}

export default QuoteList;
