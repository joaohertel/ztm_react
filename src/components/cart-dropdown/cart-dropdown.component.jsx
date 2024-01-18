import "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import { CardItem } from "../card-item/card-item.component";
import { useNavigate } from "react-router-dom";
import {
  EmptyMessge,
  CartDropdownContainer,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setDropDownOpen } from "../../store/cart/cart.actions.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

export const CartDropdown = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clickHandler = () => {
    // close the dropdown cart
    // setDropDownOpen(false);
    dispatch(setDropDownOpen(false));
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
