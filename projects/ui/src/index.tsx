import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const Application: JSX.Element = (
    <BrowserRouter>
        <div>hello world!</div>
    </BrowserRouter>
);
const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(Application, rootElement);