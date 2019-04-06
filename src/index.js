import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
// const store=createStore(()=>[],{},applyMidleware());
ReactDOM.render(
    <BrowserRouter
    //basename={optionalString}
    //forceRefresh={optionalBool}
    //getUserConfirmation={optionalFunc}
    //keyLength={optionalNumber}
    >
        <App />
    </BrowserRouter>, document.getElementById('root'));

