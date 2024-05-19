import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Importação nomeada de thunk
import rootReducer from './movie/reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;