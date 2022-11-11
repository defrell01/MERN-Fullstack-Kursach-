import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FaceForm from './components/FaceForm/FaceForm';
import AuthForm from './components/AuthForm.tsx/AuthForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from './store/store'



interface State {
  store: Store,

}

const store = new Store()

export const Context = createContext<State>({
  store,
})


ReactDOM.render(
  
  <Context.Provider value={{
    store
  }}>
    <App />
  </Context.Provider>,

  document.getElementById('root')
);

