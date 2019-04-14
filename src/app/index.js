import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './container/App';

const Index = () => (
  <Provider store={store}>
    <App className='calculator'/>
  </Provider>
);

export default  Index
