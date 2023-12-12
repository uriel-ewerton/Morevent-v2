import styles from "./Ingressos.module.css"
import linha from "../imgs/linhaDesc.svg"
import Counter from "./Counter"

function Ingressos({PrecoEstudante,TaxaEstudante, PrecoInteiro, TaxaInteira}){

    return(
        <div id="ingressosSection" className={styles.background}>
            <div className = {styles.AreaIngressos}>
                <div className = {styles.OrgaTitulo}>
                    <h2 className = {styles.Titulo}>Ingressos</h2>
                    <img className = {styles.linha} src = {linha} alt = "" />
                </div>
                <div className = {styles.TiposIngressos}>
                    <div className = {styles.AreaIngressoMeia}>
                        <div className = {styles.NomeIngresso_Preco}>
                            <h3>Meia Entrada - Estudantes</h3>
                            <p className = {styles.Preco}>R$ {PrecoEstudante} (+ R$ {TaxaEstudante} taxa)</p>
                        </div>
                        <Counter />
                    </div>
                    <div className = {styles.AreaIngressoInteiro}>
                        <div className = {styles.NomeIngresso_Preco}>
                            <h3>Entrada Inteira</h3>
                            <p className = {styles.Preco}>R$ {PrecoInteiro} (+ R$ {TaxaInteira} taxa)</p>
                        </div>
                        <Counter />
                    </div>
                </div>
                <div className = {styles.botaoComprar}>
                    <button className = {styles.botaoComprarIngressos}>Comprar Ingressos</button>
                </div>    
            </div>
        </div>
    )

}
export default Ingressos