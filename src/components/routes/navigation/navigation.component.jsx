import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { CartIcon } from "../../cart-icon/cart-icon.component";
import { CartDropdown } from "../../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { userSelector } from "../../../store/user/user.selector";
import { selectCartData } from "../../../store/cart/cart.selector";

const Navigation = () => {

  const user = useSelector(userSelector);

  const cartData = useSelector(selectCartData);

  const { dropDownOpen } = cartData;

  const HandleSignOut = async () =>{
    try{

      await signOutUser();
      // setUser(null);
    
    }
    catch (e) {
      console.log('fail in sign ou user');
    }


  }

  return (
    <Fragment>
      {user && <p>Logged in as ({user.email})</p>}
      

      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {user ? (
            <NavLink as={'span'}  className="nav-link" onClick={HandleSignOut}>SIGN OUT</NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
          {dropDownOpen && <CartDropdown/>}
      </NavigationContainer>
      {/* The body  */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
