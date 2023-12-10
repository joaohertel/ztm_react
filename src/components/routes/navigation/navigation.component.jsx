import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { CartIcon } from "../../cart-icon/cart-icon.component";
import { CartDropdown } from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  const { dropDownOpen } = useContext(CartContext);

  const HandleSignOut = async () =>{
    try{

      await signOutUser();
      setUser(null);
    
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
