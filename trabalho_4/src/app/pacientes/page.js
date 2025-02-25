'use client';
import style from './paciente.module.css';
import {  useEffect, useState} from "react";


export default function pacientes(){
    const [paciente, setPacientes] = useState([])
    const [busca, setBusca] = useState('');
    const [button, setButton] = useState(false);
    const pacientes_filtrados = paciente.filter(pacientes =>(pacientes.nome.toLowerCase().startsWith(busca.toLowerCase())));
    const getPacientes = async() =>{
        try{
            const response = await fetch ('https://api-clinica-2a.onrender.com/pacientes');
            if (!response.ok){
                throw new Error('Erro ao buscar dados:' +response.statusText);
            }
            const data = await response.json();
            setPacientes(data);
            console.log(data);
        }catch(error){
            console.log('Ocorreu um erro', error)
        }


    }
    const verificar = () =>{
        if (button) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(()=>{
       getPacientes();
    },[])
    return(
        <div className={style.container_pai}> 
            <h1 className={style.h1_tab}>Lista de Pacientes</h1>
            <div className={style.botaoPesquisa}>
                <button className={style.botao} onClick={() => setButton(verificar)}>
                    Buscar o nome do paciente
                </button>
                {
                    button && (
                        <input  type="text" 
                    className={style.input}
                    placeholder='Buscar o nome do paciente'
                    value={busca}
                    onChange={(ev) => setBusca(ev.target.value)}
            />
                    )
                }
                
            </div>
            
            <div className={style.container_tab} style={{overflowY: 'auto', maxWidth:'100%'}}> 
                <table className={style.tabela}>
                    <thead>
                        <tr  >
                            <td className={style.tr_tab}>Id</td>
                            <td className={style.tr_tab}>Nome</td>
                            <td className={style.tr_tab}>Telefone</td>
                            <td className={style.tr_tab}>E-mail</td>
                            <td className={style.tr_tab}>CPF</td>
                        </tr>   
                    </thead>
                    <tbody>
                        {pacientes_filtrados.length > 0 ?
                        (pacientes_filtrados.map((paciente) =>(
                                <tr className={style.linhaHover} key={paciente.id}>
                                    <td className={style.tabela_td}>{paciente.id}</td>
                                    <td className={style.tabela_td}> {paciente.nome}</td>
                                    <td className={style.tabela_td}>{paciente.telefone}</td>
                                    <td className={style.tabela_td}>{paciente.email}</td>
                                    <td className={style.tabela_td}>{paciente.cpf}</td>
                                    </tr> 
                        ))
                    ): (
                        <tr>
                            <td colSpan="5" className={style.tabela_td} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        Não existe paciente com o nome correspondente.
                                    </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}