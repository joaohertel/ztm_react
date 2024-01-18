import { CheckoutItem } from "../../checkout-item/checkout-item.component";
import {
  Total,
  HeaderBlock,
  CheckoutHeader,
  CheckoutContainer
} from './checkout.styles.jsx';
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../../store/cart/cart.selector.js";

export const Checkout = () => {

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
      <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock><span>Product</span></HeaderBlock>
            <HeaderBlock><span>Description</span></HeaderBlock>
            <HeaderBlock><span>Quantity</span></HeaderBlock>
            <HeaderBlock><span>Price</span></HeaderBlock>
            <HeaderBlock><span>Remove</span></HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        <Total className="total">TOTAL: $ {cartTotal}</Total>
      </CheckoutContainer>
  );
};
