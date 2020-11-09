import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core"
import MiComponente from "./MiComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://hub.docker.com/repository/docker/nokker/docker1-pruebanode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio Docker
        </a>
        <MiComponente/>
      </header>
    </div>
  );
}

export default App;
