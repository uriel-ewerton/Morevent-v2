import React from "react";
import { Link } from "react-router-dom";
import styles from './BotaoEventos.module.css'
import linha2 from '../imgs/Line 2.svg'

function BotaoEventos() {
    return (
        <div>
            <Link to="/eventos" style={{ textDecoration: 'none' }}>
                <button className={styles.botaoEventos}>eventos</button>
            </Link>
            <img className={styles.linha2} src={linha2} alt=""></img>
        </div>
    )
}

export default BotaoEventos;