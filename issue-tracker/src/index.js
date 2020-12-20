import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'; // compose - mush/combine lots of middlewear functionality together
import thunk from 'redux-thunk' // action creators  return a function.. instead of an action object!
import {Provider} from 'react-redux' // any child component gets access to store
import {BrowserRouter as Router} from 'react-router-dom'
import projectReducer from './reducers/projectReducer' 
import App from './App';  
import 'bootstrap/dist/css/bootstrap.min.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 5. composeEnhancers wrapper - if dev tools exist, assign the value of them to enhancer.  ELSE assign value of compose to enhancer const

// 3. set up store via createStore
let myStore = createStore(projectReducer, composeEnhancers(applyMiddleware(thunk))) 
    // createStore([reducers], [initialState - aka our middlewear]) 

// 1. provider wrapped around App component
ReactDOM.render(
  <Provider store={myStore}>
    <Router>
      <App />
    </Router>  
  </Provider>,
  document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementByID('root'));

