import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initialState } from './reducer';
import {StateProvider} from "./StateContext";
import reducer from "./reducer";

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
      <App />
  </StateProvider>
</React.StrictMode>,
  document.getElementById('root')
);


