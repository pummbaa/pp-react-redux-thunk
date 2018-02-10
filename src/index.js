import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from './pp.redux/redux'
import thunk from 'redux-thunk'
import {Provider} from './pp.react-redux/react-redux'
import {commentReducer} from './reducer'


// const storeEnhancers = compose(
//   applyMiddleware(thunk),
//   (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
// );
const store = createStore(commentReducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
