import "./cart-item.style.scss";

const CartItem = ( {cartItem} ) => {

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item">
      <img src={imageUrl} className="cart-item__image" alt={`${name}`} />
      <div className="cart-item__details">
        <span className="cart-item__details__name">{name}</span>
        <span className="cart-item__details__price ">{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem