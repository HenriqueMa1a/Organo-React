import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Collaborator.css";

const Collaborator = ({
  nome,
  imagem,
  cargo,
  backgroudCardColor,
  aoDeletar,
  id,
  aoFavoritar,
  favorito,
}) => {

  const favoritar = () => {
    aoFavoritar(id);
  };

  const propsFavorito = {
    onClick: favoritar,
    size: 25
  }
  return (
    <div className="collaborator">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div
        className="cabecalho"
        style={{ backgroundColor: backgroudCardColor }}
      >
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart {...propsFavorito} color='#ff0000' />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
