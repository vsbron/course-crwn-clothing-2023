import { useState } from "react";

import FormInput from "../form-input/form-input.comp";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.comp";

import { signInWithGooglePopup, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { FormContainer, FormBtnsContainer } from "./sign-in-form.style";

// Initializing the default (empty) input fields values
const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {

  // Creating state for the form fields values
  const [ formFields, setFormFiellds ] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Method for resetting all fields back to empty
  const resetFormFields = () => setFormFiellds(defaultFormFields);
  
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();   // Get the user data from authentication
  }

  // Handler method for form submit
  const handleSubmit = async (e) => {
    e.preventDefault();   // Preventing default behaviour

    try {
      // See if we authenticated user with email and password
      await signInUserWithEmailAndPassword( email, password );
      resetFormFields();

    } catch (err) {
      switch (err.code) {
        // Handle some possible errors we might get on fomr submit
        case "auth/wrong-password": console.log(`Incorrect password for ${email}`); break;
        case "auth/user-not-found": console.log("No user associated with this email"); break;
        default: console.log( err )
      }
    }
  }

  // Changing the field's values handler that updated the values in the state
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFiellds({ ...formFields, [name]: value });
  };

  return (
    <FormContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={ handleSubmit }>
        <FormInput label="Email:" type="email" required onChange={handlerChange} name="email" value={email} />
        <FormInput label="Password:" type="password" required onChange={handlerChange} name="password" value={password} />
        <FormBtnsContainer>
          <Button buttonContent="Sign In" type="submit" />
          <Button buttonContent="Google Sign In" buttonType={BUTTON_TYPE_CLASSES.google} onClick={ signInWithGoogle } />
        </FormBtnsContainer>
      </form>

    </FormContainer>
  )
}

export default SignInForm;