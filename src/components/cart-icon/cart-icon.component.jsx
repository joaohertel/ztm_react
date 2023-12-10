import {
  ShoppingIcon,
  CartIconContainer,
  IconCount
} from './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

export const CartIcon = () => {

  const { dropDownOpen, setDropDownOpen, cartQuantityCount } = useContext(CartContext);

  const toggleCartOpen = () => setDropDownOpen(!dropDownOpen);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <IconCount className='item-count'>{cartQuantityCount}</IconCount>
    </CartIconContainer>
  )
}
