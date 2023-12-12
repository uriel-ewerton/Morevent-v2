import styles from "./Header.module.css";
import Logo from "./imgs/MorEvent.svg";
import CaixaDePesquisa from "./componentes comuns/CaixaDePesquisa";
import BotaoEventos from "./componentes comuns/BotaoEventos";
import BotoesLoginCadastrar from "./componentes comuns/BotoesLogin_Cadastrar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>
      <CaixaDePesquisa />
      <BotaoEventos />
      <BotoesLoginCadastrar />
    </div>
  );
}

export default Header;
