import React from 'react';
import Header from "../componentes/Header(SemLogin)";
import Footer from "../componentes/Footer";
import Filtros from "./componentes/Filtros";
import HeaderLogado from '../componentes/Header(Logado)'

function PaginaFiltros() {
    return (
        <div>
            <HeaderLogado />
            <Filtros />
            <Footer />
        </div>
    );
}

export default PaginaFiltros;