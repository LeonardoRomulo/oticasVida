import estilos from '@/componentes/topo/Topo.module.css';
import Logo from "../../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link';

export default function Topo(){
    return(
        <div className={estilos.topo}>
        <div className={estilos.container}>
            <div className={estilos.logo}>
                <a href="#capa">
                <Image className={estilos.img_logo} src={Logo} alt="logo" />
                </a>
            </div>
            <nav className={estilos.menu}>
                <Link className={estilos.link} href="#produtos">PRODUTOS</Link>
                <Link className={estilos.link} href="#sobre">SOBRE</Link>
                <Link className={estilos.link} href="#contato">CONTATO</Link>
            </nav>
        </div>
            
        </div>
    )
}