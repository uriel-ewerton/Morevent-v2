import styles from "./Header(Logado).module.css";
import Logo from "./imgs/MorEvent.svg";
import CaixaDePesquisa from "./componentes comuns/CaixaDePesquisa";
import BotaoEventos from "./componentes comuns/BotaoEventos";
import Favoritos from "./imgs/favoritos.svg";
import UserImg from "./imgs/ImgUser.svg";
import seta from "./imgs/flechaUser.svg";
import { Link } from "react-router-dom";

function HeaderLogado() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>
      <CaixaDePesquisa />
      <BotaoEventos />
      <img src={Favoritos} alt="Favoritos" />
      <div className={styles.user}>
      <Link to="/minha-conta">
        <img src={UserImg} alt="UserImg" />
        </Link>
        <img src={seta} alt="" className={styles.seta}></img>
      </div>
    </div>
  );
}

export default HeaderLogado;
