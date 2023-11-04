import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export const ProductCard = ({ product }) => {
  const { id, name, imageUrl, price } = product;

  const { addCartItem } = useContext(CartContext);

  const onClickHandler = (event) => {
    addCartItem(product);

    alert("Added to the cart");
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={onClickHandler}>
        Add to Cart
      </Button>
    </div>
  );
};
