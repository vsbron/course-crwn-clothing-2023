/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The place for all Redux code combined
// This is where the state lives, where we receive actions and dispatch them to into reducers to update the state
// We're gonna generate here the store object that we will use inside our React application
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importing createStore separately, since it's deprecated and it is advised to use configureStore from @reduxjs/toolkit package
import { legacy_createStore as createStore } from 'redux';

import { compose, applyMiddleware} from "redux";
import logger from "redux-logger";

// Importing reducers we need to be included inside root reducer
import { rootReducer } from "./root-reducer";

// Creating middleWares. It is kind of library helpers that run before an action hits the reducer. Whenever there's dispatch, before it hits the reducer it hits the middleWares
const middleWares = [logger];
// In order for middleWares to work we have to call applyMiddleware inside the compose function
const composedEnhancers = compose(applyMiddleware(...middleWares));

// Creating the store that will hold the root reducer with all other reducers. Using createStore method that takes 3 arguments, 1 is necessary and it is root-reducer
// Second argument is for additional default states. Third argument is composedEnhancers that was declared above and holds the logger.
// Logger allows us to see what the state looks like before an action is dispatched, what the action is and how the state in turn looks after.
export const store = createStore(rootReducer, undefined, composedEnhancers);