import estilos from "@/componentes/rodape/Rodape.module.css"

export default function Rodape(){
return (
  <div>
    <span className={estilos.rodape}>
      {" "}
      &#169;2022 Óticas Vida. - Todos os direitos reservados
    </span>
  </div>
);
}