import styles from "./BotoesLogin_Cadastrar.module.css";
import React, { useState } from "react";
import LoginPopup from "../../../components/pop-ups/LoginPopup";
import SignupPopup from "../../../components/pop-ups/SignupPopup";

function BotoesLogin_Cadastrar() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  return (
    <div className={styles.botoes}>
      <button
        className={styles.botaoLogin}
        onClick={() => setShowLoginPopup(true)}
      >
        Login
      </button>
      <LoginPopup 
        open={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />

      <button className={styles.botaoCadastrar} onClick={() => setShowSignupPopup(true)}>Cadastre-se</button>
      <SignupPopup
          open={showSignupPopup}
          onClose={() => setShowSignupPopup(false)}
        />
    </div>
  );
}

export default BotoesLogin_Cadastrar;
