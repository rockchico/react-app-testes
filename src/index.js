// https://auth0.com/blog/react-router-4-practical-tutorial/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './index.css';
import App from './App';
import Sobre from './Sobre';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
