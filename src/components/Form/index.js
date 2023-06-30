import "./Form.css";
import Field from "../Field";
import Dropdown from "../Dropdown";
import { v4 as uuidv4 } from 'uuid';
import Btn from "../Btn";
import { useState } from "react";

const Form = (props) => {


  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [team, setTeam] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const bySaving = (e) => {
    e.preventDefault();
    const data = {
      nome,
      cargo,
      imagem,
      team,
      id: uuidv4(),
      favorito: false,
    }
    props.dataCollaborator(data)
    setNome('')
    setCargo('')
    setImagem('')
    setTeam('')
  };

  return (
    <section className="form-section">
{/* Formulário para o cadastro de cards */}

      <form onSubmit={bySaving}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Field
          mandatory={true}
          label="Nome"
          placeholder="Digite seu nome"
          fieldValue={nome}
          modifier={(fieldValue) => setNome(fieldValue)}
        />
        <Field
          mandatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          fieldValue={cargo}
          modifier={(fieldValue) => setCargo(fieldValue)}
        />
        <Field
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

{/* Formulário para o cadastro de times */}

      <form onSubmit={e=>{
        e.preventDefault();
        const nome = nomeTime
        const color = corTime
        props.dataTeams({nome, color})
      }}>
        <h2>Preencha os dados para criar um time</h2>
        <Field
          mandatory
          label="Nome"
          placeholder="Digite o nome do time"
          fieldValue={nomeTime}
          modifier={(fieldValue) => setNomeTime(fieldValue)}
        />
        <Field
          mandatory
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          fieldValue={corTime}
          modifier={(fieldValue) => setCorTime(fieldValue)}
        />

        {/* <Btn BtnText="Criar Card"/> */}
        <Btn>Criar um novo time</Btn>
      </form>
    </section>
  );
};

export default Form;
