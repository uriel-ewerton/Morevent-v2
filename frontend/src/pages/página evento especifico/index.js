import React from "react";
import HeaderLogado from "../../components/componentes/Header(Logado)";
import Header from "../../components/componentes/Header(SemLogin)";
import BannerImgEvento from "./componentes/BannerImgEvento";
import imgBannerBack from "./imgs/exBannerEventoImg.svg";
import imgBannerFrente from './imgs/exBannerEventoImgFrente.svg';
import InfoPrincipalEvento from "./componentes/InfoPrincipalEvento";
import DescricaoDoEvento from "./componentes/DescricaoDoEvento";
import Ingressos from "./componentes/Ingressos";
import Programacoes from "./componentes/Programações"
import Footer from "../../components/componentes/Footer";
import useAuth from "../../hooks/useAuth";

function PaginaEventoEspecifico() {
    const handleEscolherIngressosClick = () => {
        const ingressosSection = document.getElementById("ingressosSection");
        if (ingressosSection) {
            ingressosSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const { signed } = useAuth();
    
    return (
        <div>
            {signed ? <HeaderLogado /> : <Header />}
            <BannerImgEvento
                imgBannerBack={imgBannerBack}
                imgBannerFrente={imgBannerFrente}
            />
            <InfoPrincipalEvento
                NomeEvento="XVI Semana de Administração"
                DiaInicioEvento="05"
                DiaFimEvento="07"
                MesDoEvento="dezembro"
                Tipo1="Academico"
                Tipo2="Certificado"
                onButtonClick={handleEscolherIngressosClick}
            />
            <DescricaoDoEvento
                Descricao="A Semana de Administração - SEAD da Universidade Federal do Maranhão é um evento anual que tem por objetivo fomentar discussões sobre temasatuais e relevantes relacionados à gestão das organizações. Este ano o evento encontra-se em sua XVI edição e traz como temática a Governança, Inovação e Gestão pública, com vistas a discutir os desafios, perspectivase boas práticas que permeiam a realidade da Administração Pública, emprol do desenvolvimento equitativo e sustentável da sociedade. O evento é organizado pelo Curso de Administração da UFMA, mas além de ser voltado para a comunidade acadêmica da instituição, busca impactar diferentes instituições, alunos de demais estabelecimentos de ensino e a sociedade de modo geral. Este ano a SEAD conta com realização em diferentes formatos (presencial e online) "
                LocalCidade="São Luis - MA"
                LocalNome="Centro Pedagógico Paulo Freire"
                DiaInicio="05"
                DiaFim="07"
                MesEvento="dezembro"
                HoraInicio="08"
                HoraFim="10"
            />
            <Programacoes />
            <Ingressos
                PrecoEstudante="40,00"
                TaxaEstudante="6,00"
                PrecoInteiro="80,00"
                TaxaInteira="12,00"
            />
            <Footer />
        </div>
    );
}

export default PaginaEventoEspecifico;