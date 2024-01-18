import "./index.scss";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/routes/authentication/authentication.component";
import { Shop } from "./components/routes/shop/shop.component";
import { Checkout } from "./components/routes/checkout/checkout.component";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { 
  onAuthStateChangedListener, 
  createUserDocumentFromAuth
} from "./utils/firebase/firebase.utils";
import { setUser } from "./store/user/user.action";


const App = () => {

  const dispatch = useDispatch();

  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      console.log("In app.js, redux code ", user);

      if (user) {
        // create user or get user from database
        await createUserDocumentFromAuth(user);
      }

      dispatch(setUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />}>
        </Route>
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
