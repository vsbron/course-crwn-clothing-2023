// Creating a custom middleWare
export const loggerMiddleware = (store) => (next) => (action) => {

  // Guard clause. If there's no action type pass the action
  if(!action.type) { return next() }

  console.log("type: ", action.type);                 // Logs the type of the action
  console.log("payload: ", action.payload);           // Logs thew payload of the action
  console.log("currentState: ", store.getState());    // Logs the currentState

  next(action);                                       // Passing the action on

  console.log("nextState: ", store.getState());       // Logs the nextState (will run after all the loggers and reducers, because it's syncronous)
}