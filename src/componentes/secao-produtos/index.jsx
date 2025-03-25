import estilos from "@/componentes/secao-produtos/Produtos.module.css";
import Image from "next/image";
import OculosGrau from "../../../public/oculos01.png";
import OculosTransition from "../../../public/oculos02.png";
import OculosSol from "../../../public/oculos03.png";
import OculosInfnatil from "../../../public/oculos04.png";

export default function Produtos() {
return (
  <div id="produtos" className={estilos.container}>
    <div className={estilos.container_titulo}>
      <h3>Nossos Produtos</h3>
      <p>
        Trabalhamos com óculos de grau, óculos de sol, lentes transitions nos
        modelos masculinos, femininos e infantil.
      </p>
      <p>
        Todos os nossos preços são acessíveis e contam com a melhor qualidade do
        mercado
      </p>
    </div>

    <div className={estilos.container_produtos}>
      <div className={estilos.card_produto}>
        <h4>Óculos de grau</h4>
        <Image className={estilos.img_card} src={OculosGrau} ></Image>
        <p>R$ 500,00</p>
      </div>

      <div className={estilos.card_produto}>
        <h4>Óculos de Transition</h4>
        <Image className={estilos.img_card} src={OculosTransition}></Image>
        <p>R$ 750,00</p>
      </div>

      <div className={estilos.card_produto}>
        <h4>Óculos de sol</h4>
        <Image className={estilos.img_card} src={OculosSol}></Image>
        <p>R$ 700,00
        </p>
      </div>

      <div className={estilos.card_produto}>
        <h4>Óculos Infantil</h4>
        <Image className={estilos.img_card} src={OculosInfnatil}></Image>
        <p>R$ 500,00</p>
      </div>
      
    </div>
      <div className={estilos.container_listas}>
        <h4>Todos nossos Produtos incluem</h4>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
  </div>
);
}
