
function AddQuote ({onAdd}) {
    return (
        
<button onClick={onAdd} className="
  rounded-md
  border
  border-transparent
  px-9
  py-5
  text-base
  font-medium
  bg-white
  cursor-pointer
  transition
  duration-200
  hover:border-black 
  hover:bg-blue-100
  hover:scale-120
">Crea tu frase
</button>
    )

}

export default AddQuote