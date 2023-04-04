import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.comp";

import { ProductCardContainer, ProductCardImage, ProductCardFooter, ProductCardName, ProductCardPrice } from "./product-card.style";

const ProductCard =  ( {product} )  => {

  // Getting dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  // Getting the cartItems from the useSelector hook
  const cartItems = useSelector( selectCartItems );

  // Destructing the product's variables and the addItemToCart method from context
  const { name, price, imageUrl } = product;

  // Button onClick handler that uses dispatch
  const addProductToCart = () => dispatch(addItemToCart( cartItems, product ))

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>${price}</ProductCardPrice>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} buttonContent="Add to cart" type="button" onClick={ addProductToCart }></Button>
    </ProductCardContainer>
  )

}

export default ProductCard;