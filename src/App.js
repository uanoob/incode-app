import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store/store';
import Home from './layout/Home';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
