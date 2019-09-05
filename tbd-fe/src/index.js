import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import App from './containers/App/App';
// export const electron = window.require("electron")


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  const router = (
    <Provider store={store} >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )
  
ReactDOM.render(router, document.getElementById('root'));