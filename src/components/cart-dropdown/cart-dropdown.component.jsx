import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { CardItem } from "../card-item/card-item.component";
import { Link } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems, setDropDownOpen } = useContext(CartContext);


  const clickHandler = () => {
    // close the dropdown cart
    setDropDownOpen(false);
    // navigate to checkoutpage
    console.log('HandlerFired in cartDropdown component GO TO CHECKOUT Button');
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={clickHandler}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};
