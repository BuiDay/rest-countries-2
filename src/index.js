import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Components/Store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../src/Components/ThemeContext/ThemeContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider > 
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


