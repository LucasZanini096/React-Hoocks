import './App.css';
import { useState, useEffect, useCallback } from 'react';
import P from 'prop-types';
import React from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  //A cada vez que eu renderizo os componentes da página (App e button), eu sempre
  //crio novamente a função. Neste caso, não faz muita importância usar o useCallBack, pois
  //não é uma função pesada.

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

/*

<Button incrementButton={incrementCounter} />
Estou fazendo referência da função incrementCounter
*/
