import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App(props) {
  const [teams, setTeams] = useState([
    {
      idColor: uuidv4(),
      nome: "CEO",
      color: "#57c278",
    },
    {
      idColor: uuidv4(),
      nome: "Diretor",
      color: "#82cffa",
    },
    {
      idColor: uuidv4(),
      nome: "Gerente",
      color: "#a6d157",
    },
    {
      idColor: uuidv4(),
      nome: "Funcionário",
      color: "#e06b69",
    },
    {
      idColor: uuidv4(),
      nome: "Estagiário",
      color: "#db6ebf",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const cadastrarTime = (novoTime) => {
    setTeams([...teams, { ...novoTime, idColor: uuidv4() }]);
  };
  const newCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  const mudarCorDoTime = (cor, id) => {
    setTeams(
      teams.map((team) => {
        if (team.idColor === id) {
          team.color = cor;
        }
        return team;
      })
    );
  };

  const deletarColaborador = (id) => {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form
        dataTeams={(team) => cadastrarTime(team)}
        teams={teams.map((team) => team.nome)}
        dataCollaborator={(collaborator) => newCollaborator(collaborator)}
      />

      {teams.map((team) => (
        <Team
          mudarCor={mudarCorDoTime}
          idColor={team.idColor}
          key={team.nome}
          nome={team.nome}
          color={team.color}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
