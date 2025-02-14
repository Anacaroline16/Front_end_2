'use client';
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";
// import { FaUserDoctor, FaHospitalUser, FaCalendarAlt, FaHome } from "react-icons/fa";




export default function Header(){
    return(
        <header className={style.header}>
            <div className={style.divMenu}>
                <div className={style.divLogo}>
                    <Image className={style.imagemLogo} src='/imagens/CliniSys_transparent-.png' alt="Logo da pagina" width={100} height={70}/>
                </div>
                <nav className={style.nav}>
                    <ul className={style.ul} >
                            <li className={style.li}>
                                <Link className={style.link} href='/#' > 
                                Home</Link>
                            </li>
                            <li className={style.li}>
                                <Link className={style.link}  href='#'> 
                                  Medicos </Link> 
                                <ul>
                                    <li><Link href="/medico"> Listar</Link></li>
                                    <li><Link href="#"> Adicionar</Link></li>
                                    <li><Link href="#"> Editar</Link></li>
                                    <li><Link href="#"> Excluir</Link></li>
                                </ul>  
                            </li>
                            
                            <li className={style.li}>
                                <Link className={style.link} href='#' > 
                                Paciente</Link>
                                <ul>
                                    <li><Link href="/pacientes"> Listar</Link></li>
                                    <li><Link href="#"> Adicionar</Link></li>
                                    <li><Link href="#"> Editar</Link></li>
                                    <li><Link href="#"> Excluir</Link></li>
                                </ul> 
                            </li>
                            <li className={style.li}>
                                <Link className={style.link} href='#' >
                                Consultas</Link>
                                <ul>
                                    <li><Link href="/consultas"> Listar</Link></li>
                                    <li><Link href="#"> Adicionar</Link></li>
                                    <li><Link href="#"> Editar</Link></li>
                                    <li><Link href="#"> Excluir</Link></li>
                                </ul> 
                            </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
        
}

{/* <FaHome className={style.iconeHome}/>
<FaUserDoctor className={style.iconeMedico} />
<FaHospitalUser className={style.iconePaciente}/>
<FaCalendarAlt className={style.iconeConsulta}/> */}