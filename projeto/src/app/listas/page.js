export default function Listas(){
    const racas = ['Vira-Lata', 'Pit-Bull', ' Pug', 'Labrador', 'Golden', ' Shitzu']
    const racasObj = [
        {
            id:1,
            raca: 'Vira-Lata',
        },
        {
            id:2,
            raca: 'Pit-Bull',
        },
        {
            id:3,
            raca: 'Pug',
        },
        {
            id:4,
            raca: 'Labrador',
        },
        {
            id:5,
            raca: 'Golden',
        },
        {
            id:6,
            raca: 'Shitzu',
        }
    ]
    return (
        <div>
            <h1>Listas</h1>
            <h2>Lista Comum</h2>
            <ul>
                {racas.map((raca, indice) => (
                    <li key={indice}> {indice+1}-{raca}</li>
                ))}
            </ul>
            <h2>Lista de Objetos</h2>
            <ul>
                {racasObj.map((racas_obj) => (
                    <li key={racasObj.id}> {racas_obj.id} 
                    <p>{racas_obj.raca}</p> </li>
                    
                ))}
            </ul>
            {/* lista exemplo do professor */}
            <div>
                <h2>Lista exemplo </h2>
                {racasObj.map((racasObj)=>
                    <div key={racasObj.id}>
                        <h3>{racasObj.id}</h3>
                        <p>{racasObj.raca}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

// tentando
