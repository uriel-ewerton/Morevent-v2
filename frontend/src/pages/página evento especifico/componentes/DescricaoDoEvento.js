import { useState } from "react";
import styles from "./DescricaoDoEvento.module.css";
import linha from "../imgs/linhaDesc.svg";
import calendario from "../imgs/imgCalendario.svg";
import relogio from "../imgs/image 9.svg";

function DescricaoDoEvento({
  Descricao,
  LocalCidade,
  LocalNome,
  DiaInicio,
  DiaFim,
  MesEvento,
  HoraInicio,
  HoraFim,
  PeriodoDia,
}) {  
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className={styles.background}>
        <div className={styles.AreaDescricao}>
            <h2 className={styles.Titulo}>Descrição do Evento</h2>
            <img className={styles.linha} src={linha} alt="" />
            <p className={styles.info}>
            {showFullContent ? Descricao : `${Descricao.slice(0, 300)}...`}
            </p>
            <div className={styles.buttonArea}>
                {!showFullContent && (
                <button onClick={handleReadMoreClick} className={styles.readMoreBtn}>
                    Ler Mais
                </button>
                )}
            </div>
            {showFullContent && (
            <>
                <h2 className={styles.Titulo}>Local</h2>
                <img className={styles.linha} src={linha} alt="" />
                <p className={styles.infoCidade}>{LocalCidade}</p>
                <p className={styles.infoNome}>{LocalNome}</p>
                <h2 className={styles.Titulo}>Horário e Data</h2>
                <img className={styles.linha} src={linha} alt="" />
                <div className={styles.backgroundRelogioCalendario}>
                <img src={calendario} alt="" className={styles.Calendario} />
                <p className={styles.infoDia}>
                    De {DiaInicio} a {DiaFim} de {MesEvento}
                </p>
                </div>
                <div>
                <img src={relogio} alt="" className={styles.Relogio} />
                <p className={styles.infoHora}>
                    Das {HoraInicio}hrs até {HoraFim}hrs da {PeriodoDia}
                </p>
                </div>
            </>
            )}
        </div>
    </div>
  );
}

export default DescricaoDoEvento;