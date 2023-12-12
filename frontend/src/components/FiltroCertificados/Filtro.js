import './EstiloFiltro.css'
import CaixaEscolha from'./FiltroCertificadosImgs/CaixaEscolha.png'
 
function Filtro()
{
    return(
        <div className = "BordaFiltro">
            <div className = "TituloFiltro">
                <h1 className = "TextoFiltro">Filtros</h1>
            </div>
            <div className = "OpcoesEventos">
                <div className = "Op">
                    <button className = "botaoEventos">
                        <img src = {CaixaEscolha} width= '40px' height = '40px' />
                    </button>
                    <a>Disponíveis</a>
                </div>
                <div className = "Op">
                    <button className = "botaoEventos">
                        <img src = {CaixaEscolha} width= '40px' height = '40px' />
                    </button>
                    <a>Disponíveis</a>
                </div>
                <div className = "Op">
                    <button className = "botaoEventos">
                        <img src = {CaixaEscolha} width= '40px' height = '40px' />
                    </button>
                    <a>Disponíveis</a>
                </div>
                <div className = "Op">
                    <button className = "botaoEventos">
                        <img src = {CaixaEscolha} width= '40px' height = '40px' />
                    </button>
                    <a>Disponíveis</a>
                </div>
                <div className = "Op">
                    <button className = "botaoEventos">
                        <img src = {CaixaEscolha} width= '40px' height = '40px' />
                    </button>
                    <a>Disponíveis</a>
                </div>
                <div className = "Op">
                    <button className = "botaoEventos">
                        <img src = {CaixaEscolha} width= '40px' height = '40px' />
                    </button>
                    <a>Disponíveis</a>
                </div>
            </div>
        </div>
        
    )
}

export default Filtro