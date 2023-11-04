import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

export const CartIcon = () => {

  const { dropDownOpen, setDropDownOpen, cartQuantityCount } = useContext(CartContext);

  const toggleCartOpen = () => setDropDownOpen(!dropDownOpen);

  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartQuantityCount}</span>
    </div>
  )
}
