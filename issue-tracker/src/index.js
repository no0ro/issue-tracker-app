import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux' // any component we wrap with {Provider}, gets access to Redux Store

import App from './App';  

let enhancer = compose()
// middleware can be async so should be 1st store enhancer in composition chaain 

// set up store 
let store = createStore(reducer, applyMiddleware(thunk))
// createStore takes AT LEAST 2 args([reducers], [initialState])


ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementByID('root'));