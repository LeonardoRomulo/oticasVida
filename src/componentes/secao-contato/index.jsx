import estilos from "@/componentes/secao-contato/Contato.module.css";
import Image from "next/image";
import Local from "../../../public/local.png";
import Telefone from "../../../public/telefone.png";
import Email from "../../../public/email.png";
import Facebook from "../../../public/fb.png";
import Instagram from "../../../public/ig.png";
import Twitter from "../../../public/tt.png";

export default function Contato() {
  return (
    <div id="contato" className={estilos.secao_contatos}>
      <div className={estilos.container_titulo}>
        <h2>Fale conosco</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>
      </div>

      <div className={estilos.container}>
        <div className={estilos.nossos_contatos}>
          <h3>Nossos Contatos</h3>
          <div className={estilos.contatos}>
            <Image className={estilos.contatos_img} src={Local}></Image>
            <p>Nova Iguaçu, RJ</p>
          </div>
          <div className={estilos.contatos}>
            <Image className={estilos.contatos_img} src={Telefone}></Image>
            <p>(21) 9999-9999</p>
          </div>
          <div className={estilos.contatos}>
            <Image className={estilos.contatos_img} src={Email}></Image>
            <p>contato@oticavida.com</p>
          </div>
        </div>

        <div className={estilos.nossas_redes_sociais}>
          <h3>Nossas Redes Sociais</h3>
          <div className={estilos.redes_sociais}>
            <Image className={estilos.redes_sociais_img} src={Facebook}></Image>
            <p>/OticaVida</p>
          </div>

          <div className={estilos.redes_sociais}>
            <Image
              className={estilos.redes_sociais_img}
              src={Instagram}
            ></Image>
            <p>@oticavidarj</p>
          </div>
          <div className={estilos.redes_sociais}>
            <Image className={estilos.redes_sociais_img} src={Twitter}></Image>
            <p>@oticavidarj</p>
          </div>
        </div>
      </div>
    </div>
  );
}
