import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
function App() {

  const nome = 'Maria'
  return (
    <div className="App">
      <Frase/>
      <HelloWorld/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Matheus"
      idade="16" 
      profissao="programador" 
      foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
