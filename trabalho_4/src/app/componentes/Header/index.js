'use client';
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";


export default function Header(){
    return(
        <header className={style.header}>
            <div className={style.divMenu}>
                <div className={style.divLogo}>
                    <Image className={style.imagemLogo} src='/imagens/CliniSys_transparent-.png' alt="Logo da pagina" width={100} height={70}/>
                </div>
                <nav className={style.nav}>
                    <ul className={style.ul} >
                            <li className={style.li}><Link className={style.link} href='/' > Home</Link></li>
                            <li className={style.li}><Link className={style.link}  href='/medico' >Medicos</Link></li>
                            <li className={style.li}><Link className={style.link} href='/pacientes' > Paciente</Link></li>
                            <li className={style.li}><Link className={style.link} href='/consultas' >Consultas</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
        
}