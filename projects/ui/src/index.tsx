import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Application: JSX.Element = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(Application, rootElement);