'use client';
import style from './paciente.module.css';
import {  useEffect, useState} from "react";

export default function pacientes(){
    const [paciente, setPacientes] = useState([])
    const [busca, setBusca] = useState('');
    const pacientes_filtrados = paciente.filter(pacientes =>(pacientes.nome.toLowerCase().startsWith(busca.toLowerCase())));
    const getPacientes = async() =>{
        try{
            const response = await fetch ('https://api-clinica-2a.onrender.com/pacientes');
            if (!response.ok){
                throw new error('Erro ao buscar dados:' +response.statusText);
            }
            const data = await response.json();
            setPacientes(data);
            console.log(data);
        }catch(error){
            console.log('Ocorreu um erro', + error)
        }


    }
    useEffect(()=>{
       getPacientes();
    },[])
    return(
        <div className={style.container_pai}> 
            <h1 className={style.h1_tab}>Lista de Pacientes</h1>
            <input  type="text" 
                className={style.input}
                placeholder='Buscar o nome do paciente'
                value={busca}
                onChange={(ev) => setBusca(ev.target.value)}
            />
            <div className={style.container_tab}> 
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
                        {(busca === '' ? paciente : pacientes_filtrados).map((paciente) =>(
                                <tr className={style.linhaHover} key={paciente.id}>
                                    <td className={style.tabela_td}>{paciente.id}</td>
                                    <td className={style.tabela_td}> {paciente.nome}</td>
                                    <td className={style.tabela_td}>{paciente.telefone}</td>
                                    <td className={style.tabela_td}>{paciente.email}</td>
                                    <td className={style.tabela_td}>{paciente.cpf}</td>
                                    </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}