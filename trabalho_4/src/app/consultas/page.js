'use client';
import style from './consultas.module.css';
import {  useEffect, useState} from "react";

export default function consultas(){
    const [consulta, setonsulta] = useState([])
    const getConsulta = async() =>{
        try{
            const response = await fetch ('https://api-clinica-2a.onrender.com/consultas');
            if (!response.ok){
                throw new error('Erro ao buscar dados:' +response.statusText);
            }
            const data = await response.json();
            setonsulta(data);
            console.log(data);
        }catch(error){
            console.log('Ocorreu um erro', + error)
        }


    }
    useEffect(()=>{
       getConsulta();
    },[])
    return(
        <div className={style.container_pai}> 
            <h1 className={style.h1_tab}>Lista de Pacientes</h1>
            <input type="text" 
                placeholder='Digite o nome do médico'
            />
            <div className={style.container_tab}> 
                <table className={style.tabela}>
                    <thead>
                        <tr  >
                            <td className={style.tr_tab}>Id</td>
                            <td className={style.tr_tab}>Especialidade</td>
                            <td className={style.tr_tab}>Medico</td>
                            <td className={style.tr_tab}>Paciente</td>
                            <td className={style.tr_tab}>Tipo</td>
                        </tr>   
                    </thead>
                    <tbody>
                        {consulta.map((consulta) => (
                                <tr className={style.linhaHover} key={consulta.id}>
                                    <td className={style.tabela_td}>{consulta.id}</td>
                                    <td className={style.tabela_td}> {consulta.especialidade}</td>
                                    <td className={style.tabela_td}>{consulta.medico}</td>
                                    <td className={style.tabela_td}>{consulta.paciente}</td>
                                    <td className={style.tabela_td}>{consulta.tipo}</td>
                                    </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}