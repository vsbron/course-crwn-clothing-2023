import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.comp";
import Navigation from "./routes/navigation/navigation.comp";
import Authentication from "./routes/authentication/authentication.comp";
import Shop from "./routes/shop/shop.comp";

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
        <Route path="auth" element={ <Authentication /> } />
      </Route>
    </Routes>
  );
};

export default App;