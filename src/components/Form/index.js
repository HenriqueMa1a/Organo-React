import "./Form.css";
import FieldText from "../FieldText";
import Dropdown from "../Dropdown";
import Btn from "../Btn";
const Form = () => {
  const squads = [
    "Analista",
    "Desenvolvedor",
    "Auxiliar de programação",
    "Estagiário",
    "Mobile",
    "Sistemas",
  ];
  return (
    <section className="form-section">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <FieldText label="Nome" placeholder="Digite seu nome" />
        <FieldText label="Cargo" placeholder="Digite seu cargo" />
        <FieldText label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown label="Time" teams={squads} />
        {/* <Btn BtnText="Criar Card"/> */}
        <Btn>
          Criar Card
        </Btn>
      </form>
    </section>
  );
};

export default Form;
