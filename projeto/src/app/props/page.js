import Card from '@/componentes/card';

export default function Props(){
    const dogs = [
        {
            id:1,
            nome:'Perigo',
            raca:'Vira-lata',
            peso: 1.5,
            cor: 'Branca',
        },
        {
            id:2,
            nome:'Bob',
            raca:'Pit-bull',
            peso: 5,
            cor: 'Preto',
        },
        {
            id:3,
            nome:'Nonô',
            raca:'Vira-lata',
            peso: 4,
            cor: 'Branca com Preto',
        }
    ]

    return(
        <div>
            {dogs.map((dog) => (
                <Card key={dog.id}
                    nome= {dog.nome} 
                    raca={dog.raca} 
                    peso={dog.peso} 
                    cor={dog.cor}>
                </Card>
            ))}

        </div>
    )
}
