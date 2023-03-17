import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.comp";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.comp"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils"

import "./navigation.style.scss";

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      
      <div className="body__container">

      <div className="top-nav">
        <div className="logo__container"><Link to="/"><CrwnLogo className="logo" alt="CRWN Clothing logo" title="CRWN Clothing" /></Link></div>
        <nav className="nav">
          <ul>
            <li><Link to="/shop">SHOP</Link></li>
            { currentUser ? <li><span onClick={ signOutUser }>SIGN OUT</span></li> : <li><Link to="/auth">SIGN IN</Link></li> }
            <li><CartIcon /></li>
          </ul>
          { isCartOpen && <CartDropdown /> }
        </nav>
      </div>

      {/* Outlet tells when to include components from Nested Routes */}
      <Outlet />

      </div>

    </Fragment>
  )
}

export default Navigation;