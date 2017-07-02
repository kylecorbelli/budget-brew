import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './routes'
import configureStore from './redux/configure-store'
// import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
