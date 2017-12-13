"use strict";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
const styles = require('antd/dist/antd.less');
// import 'babel-polyfill';

const dom = document.getElementById('app');

ReactDOM.render(
    <App />,
    dom
);
