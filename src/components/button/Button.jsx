
function AddQuote ({onAdd}) {
    return (
        
        <button  onClick={onAdd} className="
    rounded-md
    border
    border-transparent
    px-2.5
    py-2.5
    text-base
    font-medium
    font-inherit
    bg-[#ffff]
    cursor-pointer
    transition-transform transition-colors duration-200
    duration-250
    hover:border-black
    hover:scale-120">
            Añadir
            </button>
    )
}

export default AddQuote