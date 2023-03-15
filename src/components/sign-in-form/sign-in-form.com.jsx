import { useState } from "react";

import FormInput from "../form-input/form-input.comp";
import Button from "../button/button.comp";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import "./sign-in-form.style.scss";

// Initializing the default (empty) input fields values
const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {

  // Creating state for the form fields values
  const [ formFields, setFormFiellds ] = useState(defaultFormFields);
  const { email, password } = formFields;
  

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  // Handler method for form submit
  const handleSubmit = async (e) => {
    e.preventDefault();   // Preventing default behaviour

    try {
      // See if we authenticated user with email and password
      const { user } = await signInUserWithEmailAndPassword( email, password );
    } catch (err) {
      switch (err.code) {
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
    <div className="form__container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={ handleSubmit }>
        <FormInput label="Email:" type="email" required onChange={handlerChange} name="email" value={email} />
        <FormInput label="Password:" type="password" required onChange={handlerChange} name="password" value={password} />
        <div className="form__btns-container">
          <Button buttonContent="Sign In" type="submit" />
          <Button buttonContent="Google Sign In" buttonType="google" onClick={ signInWithGoogle } />
        </div>
      </form>

    </div>
  )
}

export default SignInForm;