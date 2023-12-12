import styles from './CaixaDePesquisa.module.css'
import iconSearch from '../imgs/search icon.svg'
import linha1 from '../imgs/Line 1.svg'

function CaixaDePesquisa(){

    return(

        <div>
            <img src={iconSearch} alt='' className={styles.searchIcon} />
            <input className={styles.entrada} type="text" placeholder="Buscar eventos"></input>
            <img src={linha1} alt="" className={styles.linha} />
        </div>

    )

}

export default CaixaDePesquisa