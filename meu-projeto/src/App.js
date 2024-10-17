import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = 'Maria'
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Matheus"
      idade="16" 
      profissao="programador" 
      foto="https://via.placeholdes.com/150"
      />
    </div>
  );
}

export default App;
