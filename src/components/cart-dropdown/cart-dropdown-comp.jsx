import Button from "../button/button.comp";

import "./cart-dropdown.style.scss";

const CartDropdown = () => {

  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__items">

      </div>
      <Button type="button" buttonContent="GO TO CHECKOUT"></Button>

    </div>
  )

}

export default CartDropdown;