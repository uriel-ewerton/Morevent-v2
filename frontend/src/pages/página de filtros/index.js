import React from "react";
import Header from "../../components/componentes/Header(SemLogin)";
import Footer from "../../components/componentes/Footer";
import Filtros from "./componentes/Filtros";
import HeaderLogado from "../../components/componentes/Header(Logado)";
import useAuth from "../../hooks/useAuth";

function PaginaFiltros() {
    const { signed } = useAuth();
  return (
    <div>
      {signed ? <HeaderLogado /> : <Header />}
      <Filtros />
      <Footer />
    </div>
  );
}

export default PaginaFiltros;
