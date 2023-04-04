import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.comp";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.comp"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils"

import { LogoContainer, NavigationContainer, NavLinks } from "./navigation.style";

const Navigation = () => {

  // Getting the state values we need from the REDUX
  const currentUser = useSelector(selectCurrentUser);   // Getting the currentUser from REDUX
  const isCartOpen = useSelector(selectIsCartOpen);     // Getting the isCartOpen from REDUX

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