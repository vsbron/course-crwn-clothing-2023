/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The place where we initiate the REDUX
// This is where the state lives, where we receive actions and dispatch them to into reducers to update the state
// We're gonna generate here the store object that we will use inside our React application
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importing createStore separately, since it's deprecated and it is advised to use configureStore from @reduxjs/toolkit package
import { legacy_createStore as createStore } from 'redux';
import { compose, applyMiddleware} from "redux";

import logger from "redux-logger";    // Importing logger
// import thunk from "redux-thunk";   // Importing REDUX-Thunk

// REDUX-Saga imports
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

// Importing libraries for Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// Importing root reducer that contains all of the smaller reducers
import { rootReducer } from "./root-reducer";

//////////////////////////////////////////////////////////////////////////////////////////
// Persist - ability to store some data in users localStore storage (like cart items, etc)

// PERSIST configuration
const persistConfig = {
  key: "root",            // Part we want to start with. Root means persist whole thing
  storage,                // Place to store the data into (storage sets localStorage by default)
  whitelist: ["cart"],    // Arrays of reducers we always want to persist (cart reducer in this case)
};

// Creating the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Creating the new reducer that contains the root reducer and the config file we made
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creating middleWares. It is kind of library helpers that catch the action before hits the reducer and logs the state
// Adding statement for it to run only when NOT in production mode. And filtering it to be empty array instead of false

// // Also, adding the saga in the array
const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);
// // Alternatively, adding the thunk in the array
// const middleWares = [process.env.NODE_ENV !== "production" && logger, thunk].filter(Boolean);

// Rewriting the compose function from "redux" to support Redux DevTools extension
const composedEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// In order for middleWares to work we have to call applyMiddleware inside the (rewritten) compose function
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

// Creating the store that will hold the root reducer with all other reducers. Using createStore method that takes 3 arguments.
// 1st is necessary and it is root-reducer. In our case it's persistedReducer that contains the root-reducer already
// 2nd argument is for additional default states. 3rd argument is composedEnhancers that was declared above and holds the logger.
// Logger allows us to see what the state looks like before an action is dispatched, what the action is and how the state in turn looks after.
export const store = createStore( persistedReducer, undefined, composedEnhancers );

// Running the REDUX-Saga while passing the imported root saga
sagaMiddleware.run(rootSaga);

// Persistor object (need for index.js)
export const persistor = persistStore( store );