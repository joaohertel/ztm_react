import { useContext } from "react";
import {
  ImageContainer,
  CheckoutItemContainer
} from "./checkout-item.styles.jsx";
import { CartContext } from "../contexts/cart.context";

export const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { addCartItem, decreaseCartItemCount, removeCartItem } = useContext(CartContext);

  const decreaseQuantity = () => {

    console.log("↓ quantity");
    decreaseCartItemCount(item);
  };

  const increaseQuantity = () => {
    addCartItem(item);
    console.log("↑ quantity");
  };

  const removeItem = () => {
    console.log('Remove item');
    removeCartItem(item);
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
