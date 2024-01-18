import {
  ImageContainer,
  CheckoutItemContainer
} from "./checkout-item.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, decreaseCartItemCount, removeCartItem } from "../../store/cart/cart.actions.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";



export const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();


  const decreaseQuantity = () => {

    console.log("↓ quantity ",item);
    dispatch(decreaseCartItemCount(cartItems,item));
  };

  const increaseQuantity = () => {
    console.log("↑ quantity");
    dispatch(addCartItem(cartItems,item));
  };

  const removeItem = () => {
    console.log('Remove item');
    dispatch(removeCartItem(cartItems,item));
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={decreaseQuantity}> &#10094; &nbsp; </span> <span className="value">{quantity}</span>
        <span className="arrow" onClick={increaseQuantity}> &nbsp; &#10095; </span>
      </div>
      <div className="price">{price}</div>
        <div className='remove-button' onClick={removeItem}>&#10005;</div>
    </CheckoutItemContainer>
  );
};
