import { BUTTON_TYPE_CLASS } from "../button/button.component";
import {
  CardButton,
  ProductCardContainer,
  Footer,
  Name,
  Price,
  CardImage
} from "./product-card.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addCartItem } = useContext(CartContext);

  const onClickHandler = (event) => {
    addCartItem(product);

    alert("Added to the cart");
  };

   

  return (
    <ProductCardContainer>
      <CardImage src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CardButton buttonType={BUTTON_TYPE_CLASS.inverted} onClick={onClickHandler}>
        Add to Cart
      </CardButton>
    </ProductCardContainer>
  );
};
