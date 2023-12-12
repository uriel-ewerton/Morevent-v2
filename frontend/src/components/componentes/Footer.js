import styles from './Footer.module.css'
import Logo from './imgs/MorEvent.svg'

function Footer(){
    return(

        <div className={styles.footer}>
            <img src={Logo} alt='Logo' className={styles.logo}/>
        </div>

    )
}

export default Footer