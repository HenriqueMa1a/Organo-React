import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";
import "./Team.css";
const Team = (props) => {
  const sectionCss = { backgroundColor: hexToRgba(props.color, "0.4") };
  const titleCss = { borderColor: props.color };
  return (
    props.collaborators.length > 0 && (
      <section className="team" style={sectionCss}>
        <input
          type="color"
          className="input-color"
          value={props.color}
          onChange={(e) => props.mudarCor(e.target.value, props.idColor)}
        />
        <h3 style={titleCss}>{props.nome}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborator) => (
            <Collaborator
              key={collaborator.nome}
              backgroudCardColor={props.color}
              nome={collaborator.nome}
              cargo={collaborator.cargo}
              id={collaborator.id}
              favorito={collaborator.favorito}
              aoFavoritar={props.aoFavoritar}
              imagem={collaborator.imagem}
              aoDeletar={props.aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
