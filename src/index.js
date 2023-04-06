import React from 'react';                          // Component for React
import ReactDOM from 'react-dom';                   // Component for working with DOM
import { BrowserRouter } from "react-router-dom";   // Component for using React Router
import { Provider } from "react-redux";             // Provider of the Redux (needs store to be passed to)

// PersistGate (needs persist to be passed to)
// It can also be added loading={} attribute, and pass the element that will be shown while Gate is pulling Persist
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';                      // App.js that contains the routes
import { store } from "./store/store";        // Redux Store object that holds the root-reducer (for the Provider)
import { persistor } from "./store/store";    // Persistor object that also holds the root-reducer (for the PersistGate)

import './index.scss';                        // Main style file

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>   
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);