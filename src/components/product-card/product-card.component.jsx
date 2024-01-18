import { BUTTON_TYPE_CLASS } from "../button/button.component";
import {
  CardButton,
  ProductCardContainer,
  Footer,
  Name,
  Price,
  CardImage
} from "./product-card.styles.jsx";
import { addCartItem } from "../../store/cart/cart.actions.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";


export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const onClickHandler = (event) => {
    dispatch(addCartItem(cartItems, product));

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
