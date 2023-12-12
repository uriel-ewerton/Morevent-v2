import React from 'react';
import '../minha-conta/minha_Conta.css'
import Header from '../../components/HeaderMorEvent/Header';
import CartaoPreenchido from '../../components/Cartoes/CartaoPreenchido';
import MinhaConta from '../../components/MinhaConta(texto)/MinhaConta';
import BarraLateral from '../../components/BarraLateral/BarraLateral';


function Minha_Conta() 
{
  return (
    <div>
      <Header />
      <BarraLateral />
      <MinhaConta />
      <CartaoPreenchido />
    </div>
  )
}

export default Minha_Conta;
