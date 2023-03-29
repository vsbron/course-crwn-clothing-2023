import { Fragment, useContext } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.comp";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.comp"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils"

import { LogoContainer, NavigationContainer, NavLinks } from "./navigation.style";

const Navigation = () => {

  // Destructuring 2 variables from contexts -> The current user data, and a boolean for openeed cart menu
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      
      <div className="body__container">

      <NavigationContainer>
        
        <LogoContainer><Link to="/"><CrwnLogo className="logo" alt="CRWN Clothing logo" title="CRWN Clothing" /></Link></LogoContainer>
        
        <NavLinks>
          <ul>
            <li><Link to="/shop">SHOP</Link></li>
            { currentUser ? <li><span onClick={ signOutUser }>SIGN OUT</span></li> : <li><Link to="/auth">SIGN IN</Link></li> }
            <li><CartIcon /></li>
          </ul>
          { isCartOpen && <CartDropdown /> }

        </NavLinks>

      </NavigationContainer>
      {/* Outlet tells when to include components from Nested Routes */}
      <Outlet />

      </div>

    </Fragment>
  )
}

export default Navigation;