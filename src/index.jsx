import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider as AlertProvider } from '@blaumaus/react-alert';
import AlertTemplate from 'react-alert-template-basic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AlertProvider template={AlertTemplate}>
            <App />
        </AlertProvider>
    </React.StrictMode>
);
