import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddlewares} from './pp.redux/redux'
import arrayThunk from './pp.redux-middleware/array'
import thunk from 'redux-thunk'
import {Provider} from './pp.react-redux/react-redux'
import {commentReducer} from './reducer'


// const storeEnhancers = compose(
//   applyMiddleware(thunk),
//   (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
// );
const store = createStore(commentReducer,applyMiddlewares(thunk,arrayThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
