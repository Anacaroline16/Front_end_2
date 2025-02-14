'use client';
import style from '../pacientes/paciente.module.css';
import {  useEffect, useState} from "react";

export default function Consultas(){
    const [consulta, setConsulta] = useState([]);
    const [buscaMedico, setBuscaMedico] = useState('');
    const [buscaPaciente, setBuscaPaciente] = useState('');

    // const medicos_filtrados_consultas = consulta.filter(medicos => medicos.medico.toLowerCase().startsWith(buscaMedico.toLowerCase()));

    // const pacientes_filtrados_consultas = consulta.filter(pacientes =>(pacientes.paciente.toLowerCase().startsWith(buscaPaciente.toLowerCase())));

    const consultas_filtradas = consulta.filter( cs => cs.medico.toLowerCase().startsWith(buscaMedico.toLocaleLowerCase()) && cs.paciente.toLocaleLowerCase().startsWith(buscaPaciente.toLocaleLowerCase()));


    const getConsulta = async() =>{
        try{
            const response = await fetch ('https://api-clinica-2a.onrender.com/consultas');
            if (!response.ok){
                throw new Error('Erro ao buscar dados:' +response.statusText);
            }
            const data = await response.json();
            setConsulta(data);
            console.log(data);
        }catch(error){
            console.log('Ocorreu um erro', error)
        }


    }
    useEffect(()=>{
       getConsulta();
    },[])
    return(
        <div className={style.container_pai}> 
            <h1 className={style.h1_tab}> Consultas</h1>
            <input type="text" 
                className={style.input}
                placeholder='Buscar por médico'
                value={buscaMedico}
                onChange={(ev) => setBuscaMedico(ev.target.value)}
            />
            <input type="text" 
                className={style.input}
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
                            {consultas_filtradas.length > 0 ? (
                                consultas_filtradas.map((consulta) => (
                                    <tr className={style.linhaHover} key={consulta.id}>
                                        <td className={style.tabela_td} >{consulta.id}</td>
                                        <td className={style.tabela_td}>{consulta.especialidade}</td>
                                        <td className={style.tabela_td}>{consulta.medico}</td>
                                        <td className={style.tabela_td}>{consulta.paciente}</td>
                                        <td className={style.tabela_td}>{consulta.tipo}</td>
                                    </tr> 
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className={style.tabela_td} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                        Não existe médico nem paciente com os nomes correspondentes.
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}