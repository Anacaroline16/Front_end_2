import Link from "next/link"
import style from "./header.module.css"
export default function Header (){
    return(
        <header>
            <nav>
                <ul >
                <li className={style.li}><Link href='/' > Home</Link></li>
                    <li className={style.li}><Link href='/sobre' > Sobre</Link></li>
                    <li className={style.li}><Link href='/contato' > Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}