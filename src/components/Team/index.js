import Collaborator from "../Collaborator";
import "./Team.css";
const Team = (props) => {
  const sectionCss = { backgroundColor: props.secondaryColor };
  const titleCss = { borderColor: props.primaryColor };
  return (
      props.collaborators.length > 0 && <section className="team" style={sectionCss}>
      <h3 style={titleCss}>{props.nome}</h3>
      <div className="collaborators">
        {props.collaborators.map((collaborator) => (
          <Collaborator
            nome={collaborator.nome}
            cargo={collaborator.cargo}
            imagem={collaborator.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
