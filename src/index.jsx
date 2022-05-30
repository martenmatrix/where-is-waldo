import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { positions, Provider as AlertProvider } from '@blaumaus/react-alert';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
    position: positions.BOTTOM_RIGHT,
    timeout: 2500,
    offset: '30px',
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <App />
        </AlertProvider>
    </React.StrictMode>
);
