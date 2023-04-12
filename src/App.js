import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentuser } from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.comp";
import Authentication from "./routes/authentication/authentication.comp";
import Checkout from "./routes/checkout/checkout.comp";
import Navigation from "./routes/navigation/navigation.comp";
import Shop from "./routes/shop/shop.comp";

import { checkUserSession } from "./store/user/user.action";

const App = () => {

  // Getting the dispatch method for the REDUX
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( checkUserSession() );
  }, [] )

  // // Old way of initiating the listener for auth change
  // // Getting the dispatch method for the REDUX from the useDispacth hook
  // const dispatch = useDispatch();
  //
  // useEffect( () => {
  //   // Initiate the listener that will listen constantly for auth state change (Log in / Log out)
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);   // Create the user document if user logged in
  //     };
  //     dispatch(setCurrentUser(user));       // If not, set the new user (logged in or null) in the REDUX using dispatch method
  //   } );
  //   return unsubscribe                      // Unsubscribe the listener once the component unmounts
  // }, [] )

  return (

    // Implementing React router
    // Path    -> Matching URL
    // Element -> Component that will be displayed
    // Index   -> Displays the component when parent's path is matched

    <Routes>
      <Route path="/" element={ <Navigation /> } >
        <Route index element={ <Home /> } />
        <Route path="shop/*" element={ <Shop /> } />
        <Route path="auth" element={ <Authentication /> } />
        <Route path="checkout" element={ <Checkout /> } />
      </Route>
    </Routes>
  );
};

export default App;