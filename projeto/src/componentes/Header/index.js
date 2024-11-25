'use client';
import "../../app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./header.module.css";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header (){
    const [showMenu, setShowMenu] = useState(false);
    const tooggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const definindo_telas = () => {
        if(window.innerWidth < 600 && showMenu){
            setShowMenu(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", definindo_telas)
        return () => {
            window.removeEventListener("resize", definindo_telas)
        }
    }, [showMenu])
    return(
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.div_logo}>
                    <Image className={style.imagem}
                    src='/image/a-logo-with-two-circles-the-smaller-circle-contain-COKkdaA2Q3aqEhUhoHUx3g-HZQwuNDfTzyCzDwupdPW7g_processed.jpeg' alt="Logo" width={50} height={50} />
                </div>
                

                
                    <div className={style.container_menuMenor} onClick={tooggleMenu}>
                        {showMenu ? <IoMdClose color="white" /> : <FaBars color="white"/>} 
                    </div>

                        <nav className={`${style.nav} ${showMenu? style.nav_active : ''}` || window.innerWidth > 1500}>
                            <ul className={style.ul} >
                                <li className={style.li}><Link className={style.link} href='/' > Home</Link></li>
                                <li className={style.li}><Link className={style.link}  href='/sobre' > Sobre</Link></li>
                                <li className={style.li}><Link className={style.link} href='/contato' > Contato</Link></li>
                            </ul>
                        </nav>
                    {/* } */}
                
            </div>
        </header>
    )
}
