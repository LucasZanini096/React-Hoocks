import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*
class App extends Component {
  state = {
    reverse: true,
  };

  handleClick = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

          <button type="button" onClick={this.handleClick}>
            Reverse
          </button>
        </header>
      </div>
    );
  }
}
*/

function App() {
  const [reverse, setReverse] = useState(false);
  let [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCounter(counter + 1);
    //Posso utilizar funções de callback para definir novos estados
  };

  /*
  Exemplo

  const handleClick = () => {
    setReverse((reverse) => !reverse)
  }

  */

  const handleClickReset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1> Contador: {counter}</h1>
        <button type="button" onClick={handleClick}>
          Reverse
        </button>
        <br></br>
        <button type="button" onClick={handleClickReset}>
          Reset
        </button>
      </header>
    </div>
  );
}
export default App;
