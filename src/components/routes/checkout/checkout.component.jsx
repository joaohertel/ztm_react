import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../checkout-item/checkout-item.component";
import {
  Total,
  HeaderBlock,
  CheckoutHeader,
  CheckoutContainer
} from './checkout.styles.jsx';

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
