
function Form ({text, author, setText, setAuthor, handleSubmit, error}) {

    return (
        <>
<section className="h-screen flex flex-col justify-center items-center px-4">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-25">
    ¡Dale forma a tu inspiración!
  </h2>

  <form
    onSubmit={handleSubmit}
    className="quote-form flex flex-col gap-4 w-full max-w-md mx-auto"
  >
    <label htmlFor="frase">Frase:</label>
    <input
      type="text"
      id="frase"
      placeholder="Escribe tu frase aquí..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="quote-input border rounded bg-white py-[50px]  pl-2 text-base sm:text-lg"
    />
    {error && <p className="text-red-500 font-bold text-sm mb-4 ml-1">{error}</p>}

    <label htmlFor="author">Autor:</label>
    <input
      type="text"
      id="author"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      className="author-input border rounded bg-white p-2 mb-9 text-base sm:text-lg"
    />
    <button
      type="submit"
      className="w-auto self-center rounded bg-white font-bold cursor-pointer hover:bg-gray-200 px-3 py-2 mb-14 sm:px-4 sm:py-5"
    >
      Guardar
    </button>
  </form>
</section>
</>
);
}

export default Form;

