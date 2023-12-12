import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HomeLogado from "../pages/HomeLogado";
import Minha_Conta from "../pages/minha-conta/minha_Conta";
import Tela_Certificados from "../pages/meus-certificados/tela_Certificados";
import Eventos from "../pages/página de filtros";
import EventoEspecifico from "../pages/página evento especifico";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Home />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/logado" element={<Private Item={HomeLogado} />} />
          <Route
            exact
            path="/minha-conta"
            element={<Private Item={Minha_Conta} />}
          />
          <Route
            exact
            path="/certificados"
            element={<Private Item={Tela_Certificados} />}
          />
          <Route exact path="/eventos" element={<Eventos />} />
          <Route exact path="/eventoX" element={<EventoEspecifico />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
