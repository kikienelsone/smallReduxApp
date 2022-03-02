import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import App from './components/App';
import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import './index.css';
import {spamFilter} from "./redux/middleware";



const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        // spamFilter

    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)

