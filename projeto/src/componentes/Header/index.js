'use client';
import Link from "next/link";
import { useState } from "react";
import style from "./header.module.css";

export default function Header (){
    const [showMenu, setShowMenu] = useState(true)
    return(
        <header>
            { <button onClick={()=>setShowMenu(!showMenu)}>Clique</button>     /*  Colocar um icone   */}
            {
                showMenu &&     // gfff
                <nav>
                    <ul >
                        <li className={style.li}><Link href='/' > Home</Link></li>
                        <li className={style.li}><Link href='/sobre' > Sobre</Link></li>
                        <li className={style.li}><Link href='/contato' > Contato</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}