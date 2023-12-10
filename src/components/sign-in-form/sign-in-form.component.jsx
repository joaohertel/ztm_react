import { useState } from "react";
import {
  signUserInWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.components";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import {
  SignInContainer,
  ButtonsContainer
} from "./sign-in-form.styles.jsx";

const defaultValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  
  const [formFields, setformFields] = useState(defaultValues);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setformFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setformFields(defaultValues);
  };

  const signInWithGoogle = async () => {
    try{
      // in case the auth is successifull will recieve an Object of type UserCredentialImpL
      await signInWithGooglePopup();
    }
    catch ( e ){
      console.log('Error ', e.Message);
    }


  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // in case of success, this will contain userCredentails
    try {
      
      await signUserInWithEmailAndPassword(email, password);

      resetFormFields();
    
    } catch (e) {

      console.log(e);
      
      if( e.code === 'auth/invalid-login-credentials' ){
        alert('incorrect credentials');
      }
    }
  };


  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />
        <ButtonsContainer className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASS.google}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
