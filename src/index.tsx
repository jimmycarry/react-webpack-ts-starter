"use strict";
import * as React from 'react';
import DevTools from 'mobx-react-devtools';
import * as ReactDOM from 'react-dom';
import App from '@src/App';
import 'babel-polyfill';

const dom = document.getElementById('app');

ReactDOM.render(
    [
        <App key={'app'}/>,
        <DevTools key={'dev'}/>
    ],
    dom
);
