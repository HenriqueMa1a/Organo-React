import "./Collaborator.css";

const Collaborator = ({ nome, imagem, cargo, backgroudCardColor }) => {
  return (
    <div className="collaborator">
      <div className="cabecalho" style={{backgroundColor: backgroudCardColor}}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
