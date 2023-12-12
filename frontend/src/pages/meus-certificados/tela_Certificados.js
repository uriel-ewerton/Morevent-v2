import React, { useState } from 'react';
import { useEffect } from 'react';
import './tela_Certificados.css';
import Header from '../../components/HeaderMorEvent/Header';
import BarraLateral from '../../components/BarraLateral/BarraLateral';
import Letreiro from '../../components/LetreiroCertificados/Letreiro';
import Filtro from '../../components/FiltroCertificados/Filtro';
import Aba from '../../components/AbaCertificados/Aba';
import Certificados from '../../components/SessaoCertificados/Certificados';
import axios from 'axios';


function Tela_Certificados() {
  const [certificados, setCertificados] = useState([]); /*Uma declaração de estado. Criamos uma variável
  chamada certificados e uma função chamada setCertificados que pode ser utilizada pada atualizar
  o valor do estado. O valor inicial é um array vazio. Quando chamamos a função setCertificados,
  essa lista é atualizadas*/

  useEffect(() => 
  {
    axios.get('http://localhost:3001/certificados')
      .then(response => {
        setCertificados(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
    /*Através do useEffect, a função é executada sempre que o componente é renderizado, a menos
    que as dependências não tenham mudado desde a última atualização.
    Ele recebe dois parâmetros:uma função e um array de dependências.
    Nesse caso, o use effect está sendo utilizado para fazer uma solicitação HTTP get para a rota
    "/" usando o axios. Quando a solicitação é concluída, a função "setCertificados é chamada para 
    atualizar o estado do componente.*/
    /*Em React, um array de dependência é uma lista de valores que um hook depende. 
    Quando um desses valores mudar, o hook é chamado novamente
    O React compara os valores atuais das dependências com os valores que estavam no array na 
    última vez que o hook foi executado. Se todos os valores forem os mesmos, o hook 
    não é chamado novamente. Se algum valor tiver mudado, o hook é chamado novamente e 
    os valores atuais são passados como argumentos.*/
  return (
    <div>
      <Header />
      <BarraLateral />
      <Letreiro />
      <Filtro />
      <Aba />
      <div>
        {certificados.map(certificado => (
          <div key={certificado.id}>
            <Certificados
              nome={certificado.nome} 
              situacao={certificado.situacao} 
              nCertificado={certificado.nCertificado} 
            />
          </div>
        ))}
      </div>
      {/* O método map é usado para iterar sobre todos os itens do array certificados
      e criar um elemento HTML para cada item no array.
      A key {certificado.id} é usada pelo rect para identificar os elementos em um array. 
      Quando os elementos são renderizados, cada um precisa ter um identificador único.
      Se o ID não for fornecido, o REACT usará o índice do elemento.
      */}
      {/*Para cada item, um objeto do tipo certificadO é criado com as informações
      nome, situacao e nCertificado para ser exibido na tela.
      */}
      {/*Esses itens são enviados através de props para o componente Certificados,
      onde vamos estiliza-los*/}
    </div>
  );
}

export default Tela_Certificados;
