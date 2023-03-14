import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import "./navigation.style.scss";

const Navigation = () => {

  return (
    <Fragment>

      <div className="top-nav">
        <div className="logo__container"><Link to="/"><CrwnLogo className="logo" alt="CRWN Clothing logo" title="CRWN Clothing" /></Link></div>
        <nav className="nav">
          <ul>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/sign-in">SIGN-IN</Link></li>
          </ul>
        </nav>
      </div>

      {/* Outlet tells when to include components from Nested Routes */}
      <Outlet />

    </Fragment>
  )
}

export default Navigation;