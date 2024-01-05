import { useState, useEffect } from 'react';
import './App.css';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //useEffect -> faz a função de componentDidUpdate, componentDidMount e, componentWillUpdate

  //componentDidUpdate - executa toda vez que o componente atualiza

  useEffect(() => {
    console.log('conponentDidUpdate');
  });

  /*
  //componentDidMount - executa 1x - sem dependência
  useEffect(() => {
    console.log('componentDidMount');
  }, []);
  */

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //ComponentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);
  //O EventListener tem que ser desmontado, serão irá acumular lixo dentro da página web.
  //Para isso, tenho que retornar algo na função acima

  //Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]); //Neste caso, o array não pode estar vazio, pois houve a declaração de uma dependência no corpo da função

  return (
    <div className="App">
      <h1>Teste 3</h1>
      <h1>
        C1: {counter} C2: {counter2}{' '}
      </h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>
        +2
      </button>
    </div>
  );
}

export default App;
