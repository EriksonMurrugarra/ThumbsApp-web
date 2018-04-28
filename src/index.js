import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
// app
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// semantic
import './semantic/dist/semantic.min.css';

const store = createStore(reducers);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
