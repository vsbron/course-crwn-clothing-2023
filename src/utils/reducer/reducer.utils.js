// Helper function that recevies a type and a payload
// Returns back the object
// Exists so we don't have to type the name of keys while passing arguments to the reducer
export const createAction = ( type, payload ) => ({ type, payload })