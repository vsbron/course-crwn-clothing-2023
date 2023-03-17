import React from 'react';                          // Component for React
import ReactDOM from 'react-dom';                   // Component for working with DOM
import { BrowserRouter } from "react-router-dom";   // Component for using React Router

import App from './App';                                          // App.js that contains the routes
import { UserProvider } from './contexts/user.context';           // React context component with the User data
import { ProductsProvider } from './contexts/products.context';   // React context component with the Products data
import { CartProvider } from './contexts/cart.context';           // React context component with the Cart data

import './index.scss';                               // Main style file

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider >
         <CartProvider>
          <App />
         </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);