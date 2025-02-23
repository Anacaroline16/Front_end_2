'use client';
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";
import { useState} from "react";


export default function Header(){
    const [aberto, setAberto] = useState("");

    const abrirSubMenu = (submenu) =>{
        setAberto(submenu);
    };
    
    const fecharSubMenu = () => {
        setAberto("");
    }
    const submenus = {
        medicos: [
            {Link: "/medico", label:"Listar"},
            {Link: "#", label:"Adicionar"},
            {Link: "#", label:"Editar"},
            {Link: "#", label:"Excluir"}
        ],
        pacientes: [
            {Link: "/pacientes", label:"Listar"},
            {Link: "#", label:"Adicionar"},
            {Link: "#", label:"Editar"},
            {Link: "#", label:"Excluir"}
        ],
        consultas: [
            {Link: "/consultas", label:"Listar"},
            {Link: "#", label:"Adicionar"},
            {Link: "#", label:"Editar"},
            {Link: "#", label:"Excluir"}
        ]
    };
    
    return(
        <header className={style.header}>
            <div className={style.divLogo}>
            <Image className={style.imagemLogo} src='/imagens/CliniSys_transparent-.png' alt="Logo da pagina" width={100} height={70}/>
            </div>
            
            <div className={style.divMenu}>

                
                <nav className={style.nav} onMouseLeave={fecharSubMenu}>
                    <ul className={style.ul} >
                            <li className={style.li}>
                                <Link className={style.link} href='/#' > 
                                Home</Link>
                            </li>
                            <li className={style.li} onMouseOver={() => abrirSubMenu("medicos")}>
                                <Link className={style.link}  href='#'>Médicos </Link> 
                                {aberto === "medicos" && (
                                    <ul className={style.ulSubMenu}>
                                        {submenus.medicos.map((item, index) =>(
                                            <li key={index} className={style.liSubMenu}>
                                                <Link href={item.Link}> {item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li className={style.li} onMouseOver={() => abrirSubMenu("pacientes")}>
                            <Link className={style.link}  href='#'>Pacientes </Link> 
                                {aberto === "pacientes" && (
                                    <ul className={style.ulSubMenu}>
                                        {submenus.pacientes.map((item, index) =>(
                                            <li key={index} className={style.liSubMenu}>
                                                <Link href={item.Link}> {item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                
                            </li>
                            <li className={style.li} onMouseOver={() => abrirSubMenu("consultas")}>
                            <Link className={style.link}  href='#'>Consultas </Link> 
                                {aberto === "consultas" && (
                                    <ul className={style.ulSubMenu}>
                                        {submenus.consultas.map((item, index) =>(
                                            <li key={index} className={style.liSubMenu}>
                                                <Link href={item.Link}> {item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                
                            </li>    
                    </ul>  
                </nav>
            </div>
        </header>
    )
        
}
