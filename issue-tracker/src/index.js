import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'; // import these fn's from the Redux..(obj??). compose lets you mush lots of middlewear functionality together
import thunk from 'redux-thunk' // action creators  return a function.. instead of an action object!
import {Provider} from 'react-redux' // Wrap `App` so redux store(the one we pass in) becomes accessible to all Apps kids! 

import App from './App';  

// 5. BECOMES WRAPPER!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 4. lasso dev tool into all this bc rn they have no way of interacting with us. so middleware do what you do best, middle mans them
// 4.  compose(imported from 'redux') allows us to combinie multi middlewares!  
// if dev tools exist, assign the value of them to enhancer.  ELSE assign value of compose to enhancer const


// 3. set up store via createStore
let myStore = createStore(projectReducer, composeEnhancers(applyMiddleware(thunk))) 
// createStore takes AT LEAST 2 args([reducers], [initialState - aka any sort of middlewear]) // middleware can be async so should be 1st store enhancer in composition chaain 



ReactDOM.render(
  <Provider store={myStore}>
    <App />,
  </Provider>,
  document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementByID('root'));

