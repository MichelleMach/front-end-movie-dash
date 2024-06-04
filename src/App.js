import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/root-reducer';
import Header from './components/header/header';
import Router from './router/router';

const store = createStore(rootReducer);

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Router/>
      </div>
    </Provider>
  );
};

export default App;
