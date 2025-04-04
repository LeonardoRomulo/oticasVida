import estilos from '@/componentes/menu-mobile/Menu.module.css';
import Link from 'next/link';

export default function MenuMobile({fecharMenu}){
    return (
        <nav className={estilos.menu}>
            <Link className={estilos.link} href="#produtos" onClick={fecharMenu}>PRODUTOS</Link>
            <Link className={estilos.link} href="#sobre" onClick={fecharMenu}>SOBRE</Link>
            <Link className={estilos.link} href="#contato" onClick={fecharMenu}>CONTATO</Link>
        </nav>
    )
}