import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './container/App';
import withRoot from './withRoot';
const Index = () => (
  <Provider store={store}>
    <App className='calculator'/>
  </Provider>
);

export default  withRoot(Index)
