import React from "react"
import './EstiloAba.css'

function Aba()
{
    return(
        <div className = "Certificados">
            <div className = "Sessoes">
                <p className = "Nome">Nome</p>
                <p className = "Ingresso">N° do ingresso</p>
                <p className = "Situacao">Situação</p>
            </div>
        </div>
    );
}

export default Aba;