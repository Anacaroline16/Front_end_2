'use client';
import style from '../pacientes/paciente.module.css';
import {  useEffect, useState} from "react";

export default function Medicos(){
    
    const [medico, setMedicos] = useState([])
    const [busca, setBusca] = useState('');
    const [button, setButton] = useState(false);
    const medicos_filtrados = medico.filter(medicos=>(medicos.nome.toLowerCase().startsWith(busca.toLowerCase())));

    const getMedicos = async() =>{
        try{
            const response = await fetch ('https://api-clinica-2a.onrender.com/medicos');
            if (!response.ok){
                throw new Error('Erro ao buscar dados:' +response.statusText);
            }
            const data = await response.json();
            setMedicos(data);
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
       getMedicos();
    },[])

     
    return(
        <div className={style.container_pai}> 
            <h1 className={style.h1_tab}>Lista de Médicos</h1>
            <div className={style.botaoPesquisa}>
                <button className={style.botao} onClick={() => setButton(verificar)}>
                    Buscar o nome do médico
                </button>
                {
                    button && (
                        <input  type="text" 
                    className={style.input}
                    placeholder='Buscar o nome do médico'
                    value={busca}
                    onChange={(ev) => setBusca(ev.target.value)}
            />
                    )
                }
                
            </div>
            <div className={style.container_tab}> 
                <table className={style.tabela}>
                    <thead>
                        <tr  >
                            <td className={style.tr_tab}>Id</td>
                            <td className={style.tr_tab}>Nome</td>
                            <td className={style.tr_tab}>Telefone</td>
                            <td className={style.tr_tab}>E-mail</td>
                            <td className={style.tr_tab}>Especialidade</td>
                        </tr>   
                    </thead>
                    <tbody>
                        {medicos_filtrados.length > 0 ? (
                        medicos_filtrados.map((medico) => (
                            <tr className={style.linhaHover} key={medico.id}>
                            <td className={style.tabela_td}>{medico.id}</td>
                            <td className={style.tabela_td}> {medico.nome}</td>
                            <td className={style.tabela_td}>{medico.telefone}</td>
                            <td className={style.tabela_td}>{medico.email}</td>
                            <td className={style.tabela_td}>{medico.especialidade}</td>
                            </tr> 
                        ))
                        ) : (
                            <tr>
                                <td colSpan="5" className={style.tabela_td} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                            Não existe médico com o nome correspondente.
                                        </td>
                            </tr>
                        )}
                        
                        

                    </tbody>
                </table>
            </div>
        </div>
    )
}