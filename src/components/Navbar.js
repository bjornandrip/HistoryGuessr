import Link from "next/link"
import styles from'@/styles/navbar.module.css'

export default function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <Link href='/'>Home</Link>
                    <Link href='/game'>New game</Link>
                </ul>
            </nav>
        </>
    )
}