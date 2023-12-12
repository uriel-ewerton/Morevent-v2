import './EstiloCertificados.css'

function Certificado(props) {
    return (
      <div className= "ConteinerCertificado">
        <div className = "Certificado">
            <h2 className = "Nome">{props.nome}</h2>
            <h2 className = "nCertificado">{props.nCertificado}</h2>
            <h2 className = "Situacao">{props.situacao}</h2>
        </div>
      </div>
    );
  }
  
  export default Certificado;