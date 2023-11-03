import { useState } from "react";
import { createUserDocumentFromAuth, createUserWithEmailAndPasswordService } from "../../utils/firebase/firebase.utils";
import  FormInput  from '../form-input/form-input.components';
import Button from "../button/button.component";
import './sign-up-form.styles.scss';


const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultValues);

  const { name, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setformFields({ ...formFields, [name]: value });
  };


  const resetFormFields = () => {
    setformFields(defaultValues);
  }


  const handleSubmit = async (event) =>{
    event.preventDefault();

    if( password !== confirmPassword ){
      // error, passwords dont match
      alert('error, passwords don\'t match');
      return;
    }

    // in case of success, this will contain userCredentails
    try{
        const response = await createUserWithEmailAndPasswordService(email, password);

        const { user } = response;

        await createUserDocumentFromAuth(user, { displayName: name });

        resetFormFields();
    }
    catch (e){

      if(e.code == 'auth/email-already-in-use')
        alert('This email is allready in use');
      
      if(e.code == 'auth/weak-password')
        alert('Password must be at least 6 characters long');

    }

    
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <form onSubmit={handleSubmit}>        
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          value={name}
          name="name"
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <Button type='submit'>Sign up</Button>

      </form>
    </div>
  );
};

export default SignUpForm;
