import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
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

      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {user ? (
            <span className="nav-link" onClick={HandleSignOut}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
          {dropDownOpen && <CartDropdown/>}
      </div>
      {/* The body  */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
