import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux'
import configureStore from './redux/configure-store'

const storeMock = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={storeMock}>
      <Routes />
    </Provider>,
    div
  );
});
