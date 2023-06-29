import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
function App(props) {
  const [teams, setTeams] = useState([
    {
      nome: "CEO",
      color: "#57c278",
    },
    {
      nome: "Diretor",
      color: "#82cffa",
    },
    {
      nome: "Gerente",
      color: "#a6d157",
    },
    {
      nome: "Funcionário",
      color: "#e06b69",
    },
    {
      nome: "Estagiário",
      color: "#db6ebf",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);
  const deletarColaborador = ()=>{
    console.log('deletando colaborador')
  }

  const newCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  const mudarCorDoTime = (cor, nomeDoTime) =>{
    setTeams(teams.map(team => {
      if(team.nome === nomeDoTime){
          team.color = cor
      }
      return team
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.nome)}
        dataCollaborator={(collaborator) => newCollaborator(collaborator)}
      />

      {teams.map((team) => (
        <Team
          mudarCor={mudarCorDoTime}
          key={team.nome}
          nome={team.nome}
          color={team.color}
          collaborators = {collaborators.filter(collaborator => collaborator.team === team.nome)}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
