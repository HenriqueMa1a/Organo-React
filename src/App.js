import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
function App(props) {
  const teams = [
    {
      nome: "CEO",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      nome: "Diretor",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      nome: "Gerente",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      nome: "Fncionário",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      nome: " Estagiário",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const newCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.nome)}
        dataCollaborator={(collaborator) => newCollaborator(collaborator)}
      />

      {teams.map((team) => (
        <Team
          key={team.nome}
          nome={team.nome}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators = {collaborators.filter(collaborator => collaborator.team === team.nome)}
        />
      ))}
    </div>
  );
}

export default App;
