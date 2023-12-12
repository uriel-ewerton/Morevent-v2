import { useNavigate } from 'react-router-dom';
import './CartaoEstilo.css'

function Cartao(props)
{
    const navigate = useNavigate();
    const paginaRegistro = () =>{
        navigate('/certificados');
    }
    return(
        <div className = "item">
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
            <button onClick = {paginaRegistro}>{props.nomeBotao}</button>
        </div>
    );
}

export default Cartao;