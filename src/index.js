import React from 'react';                          // Component for React
import ReactDOM from 'react-dom';                   // Component for working with DOM
import { BrowserRouter } from "react-router-dom";   // Component for using React Router
import { Provider } from "react-redux";             // Provider of the Redux (needs store to be passed to)

import App from './App';                                              // App.js that contains the routes
import { UserProvider } from './contexts/user.context';               // React context component with the User data
import { CategoriesProvider } from './contexts/categories.context';   // React context component with the Categories data
import { CartProvider } from './contexts/cart.context';               // React context component with the Cart data
import { store } from "./store/store";                                // Redux Store file that holds the root-reducer

import './index.scss';                               // Main style file

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider >
          <CartProvider>
            <App />
          </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);