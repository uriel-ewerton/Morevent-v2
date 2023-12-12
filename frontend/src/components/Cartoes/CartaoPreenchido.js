import Cartao from "./Cartao"
import './CartaoEstiloPreenchido.css'


function CartaoPreenchido() {
    return (
      <div className="linha">
        <div className="coluna">
          <Cartao
            titulo="MEUS DADOS"
            descricao="Editar informações sobre nome, email, senha, celular, idade e endereço."
            nomeBotao="IR PARA MEUS DADOS"
          />
          <Cartao
            titulo="EVENTOS"
            descricao="Buscar eventos especificos, seja por nome ou aplicando filtros detalhados."
            nomeBotao="IR PARA EVENTOS"
          />
        </div>
  
        <div className="coluna">
          <Cartao
            titulo="MEUS INGRESSOS"
            descricao="Visualizar informações sobre ingressos passados e ativos."
            nomeBotao="IR PARA MEUS INGRESSOS"
          />
          <Cartao
            titulo="MEUS CERTIFICADOS"
            descricao="Baixar certificados de eventos já participados."
            nomeBotao="IR PARA MEUS CERTIFICADOS"
          />
        </div>
      </div>
    );
  }

  export default CartaoPreenchido;