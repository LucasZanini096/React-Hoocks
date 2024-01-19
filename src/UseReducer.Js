import React, { useContext, useReducer } from 'react';
import { useState } from 'react';
import './App.css';

const globalState = {
  //initial State
  title: 'O título que usa contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  //Função que recebe um estado, sendo o anterior e uma ação. Sempre retorna um Estado novo
  switch (action.type) {
    case 'muda':
      console.log('Chamou muda');
      return { ...state, title: 'Mudou' }; //Retornando um novo estado

    case 'inverter': {
      console.log('Chamou muda');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') }; //Retornando um novo estado
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  //Dispatch é uma função que é utilizada para disparar ações
  //Hook que manipula estados mais complexos. Recebe uma função Reducer e um objeto de estados

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverte</button>
    </div>
  );
}

export default App;

/*

Dispatch recebe um objeto que representa uma ação. Neste objeto informamos o tipo da ação, mas também podemos informar o payload

*/
