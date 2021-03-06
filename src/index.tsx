"use strict";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@src/App';
import 'babel-polyfill';

const dom = document.getElementById('app');

ReactDOM.render(
    [
        <App key={'app'}/>,
    ],
    dom
);
