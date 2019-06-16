import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router";
import {Provider} from 'react-redux';
import App from './App';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
