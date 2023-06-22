import Banner from './components/Banner'
import FielText from './components/FieldText';
function App() {
  return (
    <div className="App">
      <Banner/>
      <FielText label="Nome" placeholder="Digite seu nome"/>
      <FielText label="Cargo" placeholder="Digite seu cargo"/>
      <FielText label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
