import React, { useState } from "react"
import IconeBuscar from './LetreiroCertificadosImgs/IconeBuscar.png'
import Ingresso from './LetreiroCertificadosImgs/Ingresso.png'
import './EstiloLetreiro.css'

function Letreiro()
{
    const [texto, mudaTexto] = useState('Pesquise aqui pelos seus certificados...');
    /*Definimos uma variável de estado chamada "texto" e uma função para atualizar o valor da 
    variável de estado chamada "mudaTexto". O valor inicial é "Pesquise aqui pelos seus certificados" */ 

    const aoMudar = (event) => {
        mudaTexto(event.target.value);
      };
      /*A função "aoMudar" é chamada sempre que o valor da caixa de texto é alterado, atualizando
      o valor atual com o valor que está sendo digitado*/
    
      const aoClicar = () => {
        mudaTexto('');
      };
      /*A função "aoClicar" é chamada quando o usuário clica na caixa de texto. Essa função somente
      coloca a caixa de texto em branco para que haja digitação*/ 
      
      const aoDesfocar = () => {
        if (texto === '')
          mudaTexto('Pesquise aqui pelos seus certificados...');
      }
      /*Se ao clicarmos fora da caixa de texto e ela estiver vazia, o texto da caixa será redefinido
      para o texto original chamando a função "mudaTexto"*/

    return(
        <div className = "barraPesquisa">
           <img className = "IngressoI" alt = "icone ingresso" src = {Ingresso} width= '85' height='75'/ >
           <h1 className = "TituloCertificados">Certificados</h1>
           <div className = "Pesquisa">
                <img className = "IconeBuscar" alt = "icone buscar" src = {IconeBuscar} width= '25' height='25'/>
                <input
                  className="CaixaTexto"
                  type="text"
                  value={texto}
                  onChange={aoMudar} /*Elemento de interação para quando o elemento é modificado
                  Ele é acionado quando o valor de um elemento é alterado e, em seguida, o elemento perde o foco*/
                  onClick={aoClicar} /*Elemento de interação para quando o elemento é clicado*/
                  onBlur={aoDesfocar} /*Elemento de interação para quando o elemento perde o foco*/
                />
           </div>

        </div>
    )
}

export default Letreiro