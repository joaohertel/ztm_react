import { useState, createContext, useDeferredValue, useEffect } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
  user: null,
  setUser: () => null
});

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const userState = { user, setUser }

  useEffect(()=>{
    
    const unsubscribe = onAuthStateChangedListener(async (user)=>{

      console.log('AuthSTateChanged ', user);

      if(user){
        // create user or get user from database
        const userDoc = await createUserDocumentFromAuth(user);
      }

      setUser(user);
    });

    return unsubscribe;
  },[]);
  

  return (
    <UserContext.Provider value={userState}>
      { children }
    </UserContext.Provider>
  )
}