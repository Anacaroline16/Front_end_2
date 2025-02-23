'use client';
import style from '../pacientes/paciente.module.css';
import {  useEffect, useState} from "react";

export default function Consultas(){
    const [consulta, setConsulta] = useState([]);
    const [buscaMedico, setBuscaMedico] = useState('');
    const [buttonMedico, setButtonMedico] = useState(false);
    const [buttonPaciente, setButtonPaciente] = useState(false);
    const [buscaPaciente, setBuscaPaciente] = useState('');

    

    const consultas_filtradas = consulta.filter( cs => cs.medico.toLowerCase().startsWith(buscaMedico.toLocaleLowerCase()) && cs.paciente.toLocaleLowerCase().startsWith(buscaPaciente.toLocaleLowerCase()));

    const toggleBuscaMedico = () =>{
        setButtonMedico(prevState => !prevState);
    }

    const toggleBuscaPaciente = () =>{
        setButtonPaciente(prevState => !prevState);
    }

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
            
            <div className={style.botaoPesquisa}>
                <button className={style.botao} onClick={toggleBuscaMedico}>
                    Buscar o nome do medico
                </button>
                {
                    buttonMedico && (
                        <input  type="text" 
                    className={style.input}
                    placeholder='Buscar o nome do medico'
                    value={buscaMedico}
                    onChange={(ev) => setBuscaMedico(ev.target.value)}
            />
                    )
                }  
            </div>
            <div className={style.botaoPesquisa}>
                <button className={style.botao} onClick={toggleBuscaPaciente}>
                    Buscar o nome do paciente
                </button>
                {
                    buttonPaciente && (
                        <input  type="text" 
                    className={style.input}
                    placeholder='Buscar o nome do paciente'
                    value={buscaPaciente}
                    onChange={(ev) => setBuscaPaciente(ev.target.value)}
            />
                    )
                }  
            </div>
            <div className={style.container_tab}> 
                <table className={style.tabela}>
                    <thead>
                        <tr  >
                            <td className={style.tr_tab}>Id</td>
                            <td className={style.tr_tab}>Médico</td>
                            <td className={style.tr_tab}>Especialidade</td>
                            <td className={style.tr_tab}>Paciente</td>
                            <td className={style.tr_tab}>Tipo</td>
                        </tr>   
                    </thead>
                    <tbody>
                            {consultas_filtradas.length > 0 ? (
                                consultas_filtradas.map((consulta) => (
                                    <tr className={style.linhaHover} key={consulta.id}>
                                        <td className={style.tabela_td} >{consulta.id}</td>
                                        <td className={style.tabela_td}>{consulta.medico}</td>
                                        <td className={style.tabela_td}>{consulta.especialidade}</td>
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