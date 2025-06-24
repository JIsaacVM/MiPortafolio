import { useState } from "react"

export function IslaDinamica (){
    const [contador, setContador] = useState(0)
    const [message, setMessage] = useState("")

    const  handleCount = async () =>{
        let response = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => console.log(json));

        if(response){
            seteMssage('Tus datos fueron procesados correctamente...')
        }else{
            setMessage('error tus datos fueron procesados...')
        }
        setContador(contador+1)
    }

    console.log(contador)

    return (
        <div>
            {contador}
            <button onClick={handleCount}>
                contar
            </button>

           {message && <p> {message}</p>}
        </div>
    )
}