/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The place where we initiate the REDUX
// This is where the state lives, where we receive actions and dispatch them to into reducers to update the state
// We're gonna generate here the store object that we will use inside our React application
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importing createStore separately, since it's deprecated and it is advised to use configureStore from @reduxjs/toolkit package
import { legacy_createStore as createStore } from 'redux';
import { compose, applyMiddleware} from "redux";
// import logger from "redux-logger";

// Importing root reducer that contains all of the smaller reducers
import { rootReducer } from "./root-reducer";

// Creating a custom middleWare
const loggerMiddleware = (store) => (next) => (action) => {

  // Guard clause. If there's no action type pass the action
  if(!action.type) { return next() }

  console.log("type: ", action.type);                 // Logs the type of the action
  console.log("payload: ", action.payload);           // Logs thew payload of the action
  console.log("currentState: ", store.getState());    // Logs the currentState

  next(action);                                       // Passing the action on

  console.log("nextState: ", store.getState());       // Logs the nextState (will run after all the loggers and reducers, because it's syncronous)
}

// Creating middleWares. It is kind of library helpers that catch the action before hits the reducer and logs the state
const middleWares = [loggerMiddleware];

// In order for middleWares to work we have to call applyMiddleware inside the compose function
const composedEnhancers = compose(applyMiddleware(...middleWares));

// Creating the store that will hold the root reducer with all other reducers. Using createStore method that takes 3 arguments, 1st is necessary and it is root-reducer
// 2nd argument is for additional default states. 3rd argument is composedEnhancers that was declared above and holds the logger.
// Logger allows us to see what the state looks like before an action is dispatched, what the action is and how the state in turn looks after.
export const store = createStore( rootReducer, undefined, composedEnhancers );