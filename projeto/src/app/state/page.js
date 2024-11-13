'use client'
import {useState} from "react";

export default function State(){
    const [conteudo, setconteudo ] = useState('Bom dia!')
    const[name , setname] = useState('');
    const [showDiv, setShowDiv] = useState(true)
    const controlarPagragrafo = () => {
        setconteudo('Boa tarde!');
        console.log('conteudo:'+conteudo);
    }
    const controlarInput = (evento) => {
        console.log(evento.target.value);
        setname(evento.target.value)
    }
    return(
        <div>
            {/* <p>{conteudo}</p>
            <button onClick={controlarPagragrafo}>mudar</button> */}
            <button onClick={()=>{setShowDiv(!showDiv)}}>{showDiv? 'Esconder': 'Mostrar'}</button>
            { showDiv && 
                (
                    <div>
                        <p>Nome: {name}</p>
                        <input type="text" onChange={controlarInput}/>
                    </div>
                )
            }
        </div>
    )
}