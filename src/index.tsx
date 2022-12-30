import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/providers/ThemeProvider';
import ToastProvider from './components/providers/ToastProvider';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={'null'} persistor={persistor}>
                <ToastProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ToastProvider>
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
