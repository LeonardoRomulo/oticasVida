import estilos from "@/componentes/secao-sobre/Sobre.module.css";
import Image from "next/image";
import Loja from "../../../public/loja.png";
import Atendimento from "../../../public/atendimento.png";

export default function Sobre() {
  return (
    <div id="sobre" className={estilos.container_sobre}>
      <div className={estilos.container_titulo}>
        <h3>QUEM SOMOS NÓS</h3>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focadas no atnedimento ao público de renda
          mais baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.
        </p>
      </div>

      <div className={estilos.container_info}>
        <div className={estilos.container_filiais}>
          <div className={estilos.card_img}>
            <Image className={estilos.img_loja} src={Loja}></Image>
          </div>
          <div className={estilos.card_info}>
            <h2>NOSSAS FILIAIS</h2>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
        </div>

        <div className={estilos.container_atendimento}>
          <div className={estilos.card_img}>
            <Image
              className={estilos.img_atendimento}
              src={Atendimento}
            ></Image>
          </div>
          <div className={estilos.card_info}>
            <h2>
              ATENDIMENTO <br />
              FLEXÍVEL
            </h2>
            <p>Nossa equipe possui é treinada para atender</p>
          </div>
        </div>
      </div>
    </div>
  );
}
