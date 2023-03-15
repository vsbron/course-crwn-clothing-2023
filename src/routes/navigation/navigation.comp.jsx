import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils"

import "./navigation.style.scss";

const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>

      <div className="top-nav">
        <div className="logo__container"><Link to="/"><CrwnLogo className="logo" alt="CRWN Clothing logo" title="CRWN Clothing" /></Link></div>
        <nav className="nav">
          <ul>
            <li><Link to="/shop">SHOP</Link></li>
            { currentUser ? <li><span onClick={ signOutHandler }>SIGN OUT</span></li> : <li><Link to="/auth">SIGN IN</Link></li> }  
          </ul>
        </nav>
      </div>

      {/* Outlet tells when to include components from Nested Routes */}
      <Outlet />

    </Fragment>
  )
}

export default Navigation;