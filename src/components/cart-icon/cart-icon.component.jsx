import {
  ShoppingIcon,
  CartIconContainer,
  IconCount
} from './cart-icon.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setDropDownOpen } from '../../store/cart/cart.actions.js';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector.js';



export const CartIcon = () => {

  const dispatch = useDispatch();

  const dropDownOpen = useSelector(selectCartIsOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCartOpen = () => dispatch(setDropDownOpen(!dropDownOpen));

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <IconCount className='item-count'>{cartCount}</IconCount>
    </CartIconContainer>
  )
}
