import React, { useContext } from 'react';
import { useState } from 'react';
import './App.css';

const globalState = {
  //initial State
  title: 'O título que usa contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = React.createContext(); //Criaçõo de um estado global -> associação ao Provider
//Posso passar o estado inicial dentro de createContext, porém, geralmente, é passado dentro do Provider

// eslint-disable-next-line
const Div = ({ children }) => {
  //Componente que recebe componentes filhos
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  //Dentro de useContext tenho que me referir ao React.createContext
  //em que está associado aos dados do globalState.
  const {
    contextState: { title, counter }, //Desestruturação de objetos Js -> apenas pegando um atributo do objeto
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  //Componente que recebe componentes filhos
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
      //Tenho que fazer um spread para configurar um novo estado dentro do objeto contextState,
      //pois ele irá configurar um novo objeto, deletando todas as chaves anteriores
    >
      {body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  //Não é muito bom passar o objeto globalState direto no value do GlobalContext.Provider,
  //pois você poderá mudar o estado global por meio da mudanaça de estado de um filho isolado

  return (
    <GlobalContext.Provider value={(contextState, setContextState)}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;

/*

Usamos contextos para transmitir propriedades mais facilmente entre diferentes
parentes de elementos. Usaremos um estado global para todos os elementos de uma
família.

Outra forma:

onClick={setContextState(...contextState, counter:  1)}

*/
