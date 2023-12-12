import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker.js';
import styles from "./Filtros.module.css"
import IconCalendario from "../Imgs/calendar_outline-24px.svg"
import linha3 from "../Imgs/Line 3.svg"
import linha4 from "../Imgs/Line 4.svg"
import setaParaBaixo from "../Imgs/seta para baixo.svg"
import BarraDiv from "../Imgs/divisoria(filtros-eventos).svg"
import ExImgEvento from "../Imgs/exImgEvent.svg"
import setaParaDireita from "../Imgs/seta para direita.svg"

function Filtros(){

    const [horarioDataAtivo, setHorarioDataAtivo] = useState(false);
    const [filterTxtsAtivo, setFilterTxtsAtivo] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("Oficinas");
    const [selectedCheckbox, setSelectedCheckbox] = useState("Oficinas");

    useEffect(() => {
        $('#datepicker').datepicker({ dateFormat: 'dd/mm/yy' });

        var dataAtual = new Date().toLocaleDateString('pt-BR');
        $('#datepicker').val(dataAtual);
        $('#datepicker').datepicker({ dateFormat: 'dd/mm/yy' });
    }, []);

    const toggleHorarioData = () => {
        setHorarioDataAtivo(!horarioDataAtivo);
    };

    const toggleFilterTxts = () => {
        setFilterTxtsAtivo(!filterTxtsAtivo);
    };

    const handleCheckboxChange = (title) => {

        if (selectedCheckbox) {
          $(`#${selectedCheckbox}`).prop('checked', false);
        }

        setSelectedCheckbox(title);
        setSelectedTitle(title);
      };

    return(

        <div className = {styles.background}>
            <div className = {styles.backgroundFiltros}>
                <h2>Horários</h2>
                <div className={`${styles.Horario_Data} ${horarioDataAtivo ? styles.Horario_Data_Ativo : ''}`}>
                    <input className = {styles.checkbox} type="checkbox" id="hoje" />
                    <label className = {styles.box} htmlFor="hoje">Hoje</label>
                    <h2>Escolha a data</h2>
                    <img src= {IconCalendario} alt="" className={styles.IconCalendar} />
                    <img src= {linha3} alt="" className={styles.linha3} />
                    <input className={styles.input_data} type="text" id="datepicker" name="data" />
                    <label className={styles.labal_data} htmlFor="datepicker"></label>
                </div>
                <div className = {styles.IMGS}>
                    <img src= {linha4} alt="" className={styles.linha4} />
                    <img src= {setaParaBaixo} alt="" className={styles.setaParaBaixo1 } onClick={toggleHorarioData} />
                </div>
                <h2>Filtros</h2>
                <div className={`${styles.filter_txts} ${filterTxtsAtivo ? styles.filter_txts_Ativo : ''}`}>
                    <input className = {styles.checkbox} type="checkbox" id="oficina" onChange={() => handleCheckboxChange("Oficinas")} checked={selectedCheckbox === "Oficinas"} />
                    <label className = {styles.box} htmlFor="oficina">Oficinas</label>
                    <input className = {styles.checkbox} type="checkbox" id="academico" onChange={() => handleCheckboxChange("Acadêmicos")} checked={selectedCheckbox === "Acadêmicos"} />
                    <label className = {styles.box} htmlFor="academico">Acadêmicos</label>
                    <input className = {styles.checkbox} type="checkbox" id="palestra" onChange={() => handleCheckboxChange("Palestras")} checked={selectedCheckbox === "Palestras"} />
                    <label className = {styles.box} htmlFor="palestra">Palestras</label>
                    <input className = {styles.checkbox} type="checkbox" id="festa" onChange={() => handleCheckboxChange("Festas")} checked={selectedCheckbox === "Festas"} />
                    <label className = {styles.box} htmlFor="festa">Festas</label>
                    <input className = {styles.checkbox} type="checkbox" id="show" onChange={() => handleCheckboxChange("Shows")} checked={selectedCheckbox === "Shows"} />
                    <label className = {styles.box} htmlFor="show">Shows</label>
                    <input className = {styles.checkbox} type="checkbox" id="esporte" onChange={() => handleCheckboxChange("Esportes")} checked={selectedCheckbox === "Esportes"} />
                    <label className = {styles.box} htmlFor="esporte">Esportes</label>
                    <input className = {styles.checkbox} type="checkbox" id="certificado" onChange={() => handleCheckboxChange("Certificados")} checked={selectedCheckbox === "Certificados"} />
                    <label className = {styles.box} htmlFor="certificado">Certificados</label>
                </div>
                <div className = {styles.IMGS}>
                    <img src= {linha4} alt="" className={styles.linha4} />
                    <img src= {setaParaBaixo} alt="" className = {styles.setaParaBaixo2} onClick={toggleFilterTxts} />
                </div>
            </div>
            <div className= {styles.backgroundBarra}>
                <img src={BarraDiv} alt='' className={styles.BarraDiv} />
            </div>
            <div className={styles.backgroundEventos}>
                <h2 className={styles.h2eventos}>{selectedTitle}</h2>
                <div className={styles.categoria}>
                    <div className={styles.img_nome_evento}>
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a href="/EventoX">Evento 1</a> 
                    </div>
                    <div className={styles.img_nome_evento}>
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a hrer="/EventoX">Evento 2</a> 
                    </div>
                    <div className={styles.img_nome_evento}>
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a hrer="/EventoX">Evento 3</a> 
                    </div>
                    <div>
                        <img src={setaParaDireita} alt="" className={styles.setaDireita} />
                    </div>
                </div>
                <h2 className={styles.h2eventos}>Recomendados</h2>
                <div className={styles.categoria}>
                    <div className={styles.img_nome_evento}>
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a hrer="/EventoX">Evento 4</a> 
                    </div>
                    <div className={styles.img_nome_evento}>
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a hrer="/EventoX">Evento 5</a> 
                    </div>
                    <div className={styles.img_nome_evento} >
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a hrer="/EventoX">Evento 6</a> 
                    </div>
                    <div>
                        <img src={setaParaDireita} alt="" className={styles.setaDireita} />
                    </div>
                </div>
                <h2 className={styles.h2eventos}>Em alta</h2>
                <div className={styles.categoria}>
                    <div className={styles.img_nome_evento}>
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a hrer="/EventoX">Evento 7</a> 
                    </div>
                    <div className={styles.img_nome_evento}>
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a hrer="/EventoX">Evento 8</a> 
                    </div>
                    <div className={styles.img_nome_evento}>
                        <a href="/EventoX"><img src={ExImgEvento} alt="" className={styles.imgEvento} /></a>
                        <a className={styles.ultimo} hrer="/EventoX">Evento 9</a> 
                    </div>
                    <div>
                        <img src={setaParaDireita} alt="" className={styles.setaDireita} />
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Filtros