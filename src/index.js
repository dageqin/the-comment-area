import MessageBox from './MessageBox';
import React from 'react';
import ReactDOM from 'react-dom';
let local=require('./local');
require('bootstrap/dist/css/bootstrap.css');
ReactDOM.render(<MessageBox model={local}/>,document.querySelector('#app'));