'use client';
import style from './consultas.module.css';
import {  useEffect, useState} from "react";

export default function Consultas(){
    const [consulta, setonsulta] = useState([]);
    const [buscaMedico, setBuscaMedico] = useState([]);
    const [buscaPaciente, setBuscaPaciente] = useState([]);

    const medicos_filtrados_consultas = consulta.filter(cs=>{
        // console.log(cs.medico.toLowerCase())
        return  cs.medico.toLowerCase().startsWith(buscaMedico.toLowerCase())
        // console.log(retorno)
        // return retorno
    });
 

    const pacientes_filtrados_consultas = buscaPaciente.filter(pacientes =>(pacientes.paciente.toLowerCase().startsWith(buscaPaciente.toLowerCase())));


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
            <h1 className={style.h1_tab}> Consultas</h1>
            <input type="text" 
                placeholder='Buscar por médico'
                value={buscaMedico}
                onChange={(ev) => setBuscaMedico(ev.target.value)}
            />
            <input type="text" 
                placeholder='Buscar o nome do paciente'
                value={buscaPaciente}
                onChange={(ev) => setBuscaPaciente(ev.target.value)}
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
                        {(buscaMedico === ''? consulta: medicos_filtrados_consultas).map((consulta) => (
                                <tr className={style.linhaHover} key={consulta.id}>
                                    <td className={style.tabela_td}>{consulta.id}</td>
                                    <td className={style.tabela_td}> {consulta.especialidade}</td>
                                    <td className={style.tabela_td}>{consulta.medico}</td>
                                    <td className={style.tabela_td}>{consulta.paciente}</td>
                                    <td className={style.tabela_td}>{consulta.tipo}</td>
                                    </tr> 
                        ))}
                         {/* {(busca === '' ? medico:medicos_filtrados).map((medico) => (
                            <tr className={style.linhaHover} key={medico.id}>
                            <td className={style.tabela_td}>{medico.id}</td>
                            <td className={style.tabela_td}> {medico.nome}</td>
                            <td className={style.tabela_td}>{medico.telefone}</td>
                            <td className={style.tabela_td}>{medico.email}</td>
                            <td className={style.tabela_td}>{medico.especialidade}</td>
                            </tr> 
                        ))} */}
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