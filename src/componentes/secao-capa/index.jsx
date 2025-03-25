import estilos from "@/componentes/secao-capa/Capa.module.css";
// import Image from "/next/image";
// import banner from "../../../public/capa.png"

export default function Capa() {
return (
  <div id="capa" className={estilos.secao_capa}>
    <div className={estilos.container_titulo}>
      <div className={estilos.titulo}>
        <p>Preços baixos em</p>
        <h1>
          ÓCULOS DE <br />
          GRAU E DE SOL
        </h1>
        <p>Você só encontra aqui</p>
      </div>
    </div>
  </div>
);
}
