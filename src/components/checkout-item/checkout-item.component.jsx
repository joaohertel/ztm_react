import { useContext } from "react";
import "./checkout-item.styles.scss";
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={decreaseQuantity}> &#10094; &nbsp; </span> <span className="value">{quantity}</span>
        <span className="arrow" onClick={increaseQuantity}> &nbsp; &#10095; </span>
      </div>
      <div className="price">{price}</div>
        <div className='remove-button' onClick={removeItem}>&#10005;</div>
    </div>
  );
};
