/*import React from 'react';
import { useEffect, useState } from 'react';


function List({quotes, onEdit, onDelete}) {
    return (
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
    );
}
export default List;*/