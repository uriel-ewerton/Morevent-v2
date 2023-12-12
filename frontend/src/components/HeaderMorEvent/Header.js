import { useState } from "react";
import Icone_usuario1 from './HeaderImgs/Icone_usuario1.png';
import MorEvent from './HeaderImgs/MorEvent(logo).png';
import LinhaHorizontal from './HeaderImgs/LinhaHorizontal.png';
import Icone_Pesquisar from './HeaderImgs/Icone_Pesquisar.png';

import './EstiloHeader.css'

function Header(){
    const [texto, mudaTexto] = useState('Buscar evento');

    const aoMudar = (event) =>{
        mudaTexto(event.target.value);
    };

    const aoClicar = () =>{
        mudaTexto('');
    }

    const aoDesfocar = () =>{
        if(texto === '')
            mudaTexto('Buscar evento');
    }

    return(
        <header className="cabecalho">
            <img  className = "Linha" src = {LinhaHorizontal} alt = "Linha Horizontal" width="1" height="50"/>

            <a className = "logo" href = "/">
                <img className = "MorEventLogo" src = {MorEvent} alt = "Logo MorEvent" width="280" height="50"/>
            </a>

            <div className = "AbaPesquisa">
                <img className = "IconePesquisar" src = {Icone_Pesquisar} alt = "Icone Pesquisar" width="30" height="25" />
                <input className = "BarraPesquisa" 
                    type = "text"
                    value = {texto}
                    onChange = {aoMudar}
                    onClick = {aoClicar}
                    onBlur = {aoDesfocar}
                />
            </div>

            <div className = "eventos">
                <p1 className = "paragrafoEventos">eventos</p1>
            </div>

            <a className = "usuario" href = "/minha-conta">
                <img src={Icone_usuario1} alt="Icone Usuario1" width="40" height="40"/>
            </a>
        </header>
    )
}

export default Header