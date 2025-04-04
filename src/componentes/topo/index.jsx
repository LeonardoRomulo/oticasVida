'use client';
import { useState } from 'react';
import estilos from '@/componentes/topo/Topo.module.css';
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Logo from "../../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link';
import MenuMobile from '../menu-mobile';

export default function Topo() {
    const [abrirMenu, setAbrirMenu] = useState(false);

    function atualizarMenu() {
        setAbrirMenu(!abrirMenu);
    }

    return (
        <div className={estilos.topo}>
            <div className={estilos.container}>
                <div className={`${estilos.logo} ${abrirMenu ? estilos.hidden : ''}`}>
                    <a href="#capa">
                        <Image className={estilos.img_logo} src={Logo} alt="logo" />
                    </a>
                </div>
                <nav className={estilos.menu}>
                    <Link className={estilos.link} href="#produtos">PRODUTOS</Link>
                    <Link className={estilos.link} href="#sobre">SOBRE</Link>
                    <Link className={estilos.link} href="#contato">CONTATO</Link>
                </nav>
                {abrirMenu &&(
                    <MenuMobile fecharMenu ={() => setAbrirMenu(false)} />
                )}
            <button className={estilos.botao} onClick={atualizarMenu}>{abrirMenu ? <IoIosClose size={30}/> : <IoIosMenu size={30} /> }</button>
            </div>
        </div>
    )
}