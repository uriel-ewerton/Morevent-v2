import React from "react";
import styles from "./InfoPrincipalEvento.module.css";
import imgCalendario from "../imgs/imgCalendario.svg";

function InfoPrincipalEvento({ NomeEvento, DiaInicioEvento, DiaFimEvento, MesDoEvento, Tipo1, Tipo2, onButtonClick }) {
    return (
        <div className={styles.background}>
            <div className={styles.AreaInfoPrincipal}>
                <div className={styles.InfoPrincipal}>
                    <h2 className={styles.Nome}>{NomeEvento}</h2>
                    <div className={styles.IconeCalendar_Data}>
                        <img className={styles.iconCalendar} src={imgCalendario} alt="" />
                        <p className={styles.Data}>{DiaInicioEvento} a {DiaFimEvento} de {MesDoEvento}</p>
                    </div>
                    <div className={styles.TipoEvento}>
                        <p className={styles.Tipo1}>{Tipo1}</p>
                        <p className={styles.Tipo2}>{Tipo2}</p>
                    </div>
                </div>
                <div className={styles.FazerInscricao}>
                    <p className={styles.Txt_FaçaIns}>Faça sua Inscrição</p>
                    <button className={styles.BotaoEscolherIng} onClick={onButtonClick}>Escolher ingressos</button>
                </div>
            </div>
        </div>
    );
}

export default InfoPrincipalEvento;