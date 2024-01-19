import React, { createContext, useContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import './App.css';

//actions.js

export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//data.js
const globalState = {
  //initial State
  title: 'O título que usa contexto',
  body: 'O body do contexto',
  counter: 0,
};

//reducer.js
export const reducer = (state, action) => {
  switch (actions.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return { ...state, title: 'Qualquer coisa' };
    }
  }

  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = () => {
    dispatch({ type: actions.CHANGE_TITLE });
  };

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

//H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef}></input>
    </>
  );
};

//App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <h1>Oi</h1>
      </div>
    </AppContext>
  );
}

export default App;

/*

Dispatch recebe um objeto que representa uma ação. Neste objeto informamos o tipo da ação, mas também podemos informar o payload

*/
