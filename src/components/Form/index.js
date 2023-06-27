import "./Form.css";
import FieldText from "../FieldText";
import Dropdown from "../Dropdown";
import Btn from "../Btn";
import { useState } from "react";

const Form = (props) => {


  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [team, setTeam] = useState("CEO");

  const bySaving = (e) => {
    e.preventDefault();
    console.log("Formulário submetido =>", nome, cargo, imagem, team);
    const data = {
      nome,
      cargo,
      imagem,
      team
    }
    props.dataCollaborator(data)
    setNome('')
    setCargo('')
    setImagem('')
    setTeam('')
  };

  return (
    <section className="form-section">
      <form onSubmit={bySaving}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <FieldText
          mandatory={true}
          label="Nome"
          placeholder="Digite seu nome"
          fieldValue={nome}
          modifier={(fieldValue) => setNome(fieldValue)}
        />
        <FieldText
          mandatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          fieldValue={cargo}
          modifier={(fieldValue) => setCargo(fieldValue)}
        />
        <FieldText
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          fieldValue={imagem}
          modifier={(fieldValue) => setImagem(fieldValue)}
        />
        <Dropdown
          mandatory={true}
          label="Time"
          teams={props.teams}
          fieldValue={team}
          modifier={(fieldValue) => setTeam(fieldValue)}
        />

        {/* <Btn BtnText="Criar Card"/> */}
        <Btn>Criar Card</Btn>
      </form>
    </section>
  );
};

export default Form;
