'use client'
import { useState } from "react"

export default function Filter() {
    const [busca, setBusca ] = useState('')
    const nomes = ['Wagner', 'Beatriz', 'Ana', 'Mariana']
    const nums = [1,2,3,4,5,6,7,8,9,10]
    const pares = nums.filter(num => (num%2==0))
    const nomesinput = nomes.filter(nome =>(nome.toLowerCase().startsWith(busca.toLowerCase())));
    
    console.log(nums)
    console.log(pares)
    return(
        <div>
            <h1>  </h1>
            <input
                value={busca}
                type="text"
                onChange={evento =>(setBusca(evento.target.value))} />
            <ul>
                {nomesinput.map((nome, i  ) => (
                    <li key={i}> {nome}</li>
                ))}



                
            </ul>
        </div>
    )
}