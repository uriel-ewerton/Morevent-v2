import React, { useState } from 'react';
import styles from './Programações.module.css';
import linha from '../imgs/linhaDesc.svg';

function Programações() {
  const [diaAtivo, setDiaAtivo] = useState('5/12'); // Inicializa o primeiro dia como ativo

  const handleDiaClick = (dia) => {
    setDiaAtivo(dia);
  };

  const renderizarInformacoes = () => {
    switch (diaAtivo) {
      case '5/12':
        return (
          <div className={styles.infosPro}>
            <div className={styles.container}>
              <p className={styles.info}>Abertura</p>
              <p className={styles.horario}>08hrs - 09hrs</p>
            </div>
            <div className={styles.container}>
              <p className={styles.info}>Palestra: Tendências e Desafios da Gestão Pública</p>
              <p className={styles.horario}>09hrs - 10hrs</p>
            </div>
            <div className={styles.container}>
              <p className={styles.info}>Painel ‘Transparência e participação social na Gestão Pública - métodos e prática</p>
              <p className={styles.horario}>10hrs</p>
            </div>
          </div>
        );
        case '6/12':
        return (
          <div className={styles.infosPro}>
            <div className={styles.container}>
              <p className={styles.info}>Workshop: Inovações Tecnológicas na Administração Pública</p>
              <p className={styles.horario}>09hrs - 10hrs</p>
            </div>
            <div className={styles.container}>
              <p className={styles.info}>Mesa Redonda: Desafios da Sustentabilidade na Gestão Municipal</p>
              <p className={styles.horario}>10hrs - 11hrs</p>
            </div>
            <div className={styles.container}>
              <p className={styles.info}>Almoço comunitário</p>
              <p className={styles.horario}>11hrs</p>
            </div>
          </div>
        );
        case '7/12':
        return (
            <div className={styles.infosPro}>
            <div className={styles.container}>
                <p className={styles.info}>Apresentação de Casos de Sucesso em Gestão de Projetos</p>
                <p className={styles.horario}>09hrs - 10hrs</p>
            </div>
            <div className={styles.container}>
                <p className={styles.info}>Oficina: Ferramentas Digitais para Transparência Governamental</p>
                <p className={styles.horario}>10hrs - 11hrs</p>
            </div>
            <div className={styles.container}>
                <p className={styles.info}>Encerramento</p>
                <p className={styles.horario}>11hrs</p>
            </div>
            </div>
        );
    default:
        return null;
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.AreaPro}>
        <div className={styles.OrgaTitulo}>
          <h2 className={styles.Titulo}>Programação de eventos</h2>
          <img className={styles.linha} src={linha} alt="" />
        </div>
        <div className={styles.datas}>
          <button
            className={diaAtivo === '5/12' ? styles.diaAtivo : styles.dia}
            onClick={() => handleDiaClick('5/12')}
          >
            5/12
          </button>
          <button
            className={diaAtivo === '6/12' ? styles.diaAtivo : styles.dia}
            onClick={() => handleDiaClick('6/12')}
          >
            6/12
          </button>
          <button
            className={diaAtivo === '7/12' ? styles.diaAtivo : styles.dia}
            onClick={() => handleDiaClick('7/12')}
          >
            7/12
          </button>
        </div>
        <div className={styles.AreaInfoPro}>{renderizarInformacoes()}</div>
      </div>
    </div>
  );
}

export default Programações;