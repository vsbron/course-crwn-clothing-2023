import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.comp";
import Navigation from "./routes/navigation/navigation.comp";
import SignIn from "./routes/sign-in/sign-in.comp";

const Shop = () => <h1>I am the Shop</h1>;

const App = () => {
  return (

    // Implementing React router
    // Path    -> Matching URL
    // Element -> Component that will be displayed
    // Index   -> Displays the component when parent's path is matched

    <Routes>
      <Route path="/" element={ <Navigation /> } >
        <Route index element={ <Home /> } />
        <Route path="shop" element={ <Shop /> } />
        <Route path="sign-in" element={ <SignIn /> } />
      </Route>
    </Routes>
  );
};

export default App;