// core
import React from 'react';
import { Provider } from 'react-redux';

// pages
import Main from '../Main';

// store
import store from '../../store';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
