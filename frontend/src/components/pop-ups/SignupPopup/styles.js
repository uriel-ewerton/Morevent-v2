import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const SignupPopup = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42%;
  min-width: 300px;
  max-width: 500px;
  height: 85%;
  min-height: 600px;
  max-height: 600px;
  border: 1.3vh solid #272d48;
  border-radius: 2%;
  background-color: white;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`;
export const BotaoCadastro = styled.div`
  & button {
    width: 37%;
    min-width: 150px;
    height: 100%;
    max-height: 50px;
    font-size: 2em;
    margin-bottom: 10px;
    margin-top: 0px;
  }
`;
export const Entradas = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  & div {
    padding: 5px 0px 0px 5px;
  }
`;
export const LinksCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & label {
    font-size: 24px;
  }

  & .Imagens {
    display: flex;
    padding: 10px 0px;
    width: 110px;
    justify-content: space-between;
  }

  & .Imagens img {
    width: 50px;
    height: 50px;
  }

  & .NaoCadastrado {
    color: #272d48;
    font-size: 20px;
    padding-bottom: 10px;

    text-decoration: none;
  }

  & .NaoCadastrado Link {
    color: #102eb5;
    text-decoration: none;
  }
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const botao_fechar = styled.button`
  position: absolute;
  display: flex;
  top: 1%;
  left: 95%;
  transform: translate(-50%, 0%);
  background-color: white;
  border: 3px solid #272d48;
  border-radius: 2px;
  width: clamp(20px, 10vw, 30px);
  height: clamp(20px, 10vw, 30px);
  justify-content: center;
  align-items: center;

  & p {
    position: absolute;
    font-weight: 600;
    text-align: center;
    font-size: clamp(20px, 2vw, 25px);
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
