
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App state />
    </Provider>
  </BrowserRouter>,
     
  document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for e xample: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//<React.StrictMode></React.StrictMode>(был обгорнут App)
//={state} dispatch={store.dispatch.bind(store)} store={store}