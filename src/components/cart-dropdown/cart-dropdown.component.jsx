import "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { CardItem } from "../card-item/card-item.component";
import { useNavigate } from "react-router-dom";
import {
  EmptyMessge,
  CartDropdownContainer,
  CartItems,
} from "./cart-dropdown.styles.jsx";

export const CartDropdown = () => {
  const { cartItems, setDropDownOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const clickHandler = () => {
    // close the dropdown cart
    setDropDownOpen(false);
    // navigate to checkoutpage
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">
        {cartItems.length !== 0 ? (
          cartItems.map((item) => <CardItem key={item.id} item={item} />)
        ) : (
          <EmptyMessge>Your Cart is Empty</EmptyMessge>
        )}
      </CartItems>
      <Button onClick={clickHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
