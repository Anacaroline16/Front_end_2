'use client';
import style from './medico.module.css';
import {  useEffect, useState} from "react";

export default function medicos(){
    const [medicos, setMedicos] = useState([
        { idmedico: 1, nome: "Dr. João Silva", telefone: "(11)99999-0001", email: "joão@silva.com", especialidade: "Clínica Geral" },
        { idmedico: 2, nome: "Dra. Maria Luiza", telefone: "(11)98888-0002", email: "maria@luiza.com", especialidade: "Pediatria" },
        { idmedico: 3, nome: "Dr. Antonio Carlos", telefone: "(11)97777-0003", email: "antonio@carlos.com", especialidade: "Cirurgia" },
        { idmedico: 4, nome: "Dra. Sofia Patrícia", telefone: "(11)96666-0004", email: "sofia@patricia.com", especialidade: "Ginecologia" },
        { idmedico: 5, nome: "Dr. Luiz Henrique", telefone: "(11)95555-0005", email: "luiz@henrique.com", especialidade: "Cardiologia" },
        { idmedico: 6, nome: "Dra. Beatriz Cristina", telefone: "(11)94444-0006", email: "beatriz@cristina.com", especialidade: "Psiquiatria" },
        { idmedico: 7, nome: "Dr. Marcelo Alves", telefone: "(11)93333-0007", email: "marcelo@alves.com", especialidade: "Ortopedia" },
        { idmedico: 8, nome: "Dra. Laura Fernanda", telefone: "(11)92222-0008", email: "laura@fernanda.com", especialidade: "Dermatologia" },
        { idmedico: 9, nome: "Dr. Felipe Oliveira", telefone: "(11)91111-0009", email: "felipe@oliveira.com", especialidade: "Urologia" },
        { idmedico: 10, nome: "Dra. Gabriela Souza", telefone: "(11)90000-0010", email: "gabriela@souza.com", especialidade: "Oftalmologia" }
        ]);
    return(
        <table className={style.tabela}>
            <thead >
                <tr key="" >
                    <td >id</td>
                    <td>nome</td>
                    <td>telefone</td>
                    <td>e-mail</td>
                    <td>especialidade</td>
                </tr>   
            </thead>
            <tbody>
                {medicos.map((medico) => (
                        <tr key={medico.idmedico}>
                            <td>{medico.idmedico}</td>
                            <td>{medico.nome}</td>
                            <td>{medico.telefone}</td>
                            <td>{medico.email}</td>
                            <td>{medico.especialidade}</td>
                            </tr> 
                ))}
            </tbody>
        </table>
    )
}