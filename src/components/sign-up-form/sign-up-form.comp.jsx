import { useState } from "react";

import FormInput from "../form-input/form-input.comp";
import Button from "../button/button.comp";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import "./sign-up-form.style.scss";

// Initializing the default (empty) input fields values
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {

  // Creating state for the form fields values
  const [ formFields, setFormFiellds ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // Method for resetting all fields back to empty
  const resetFormFields = () => setFormFiellds(defaultFormFields);

  // Handler method for form submit
  const handleSubmit = async (e) => {
    e.preventDefault();   // Preventing default behaviour

    try {
      // Make sure passwords match
      if( password !== confirmPassword) throw Error ("Passwords do not match");

      // See if we successfully created user with email and password
      const { user } = await createAuthUserWithEmailAndPassword( email, password );

      // Create a user document from what is returns
      await createUserDocumentFromAuth( user, { displayName } );

      // Clear input fields
      resetFormFields();

    } catch (err) {
      if ( err.code === "auth/email-already-in-use") {
        console.log("Cannot create user, email already in use")
      } else console.log( err.message );
    }
  }

  // Changing the field's values handler that updated the values in the state
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFiellds({ ...formFields, [name]: value });
  };

  return (
    <div className="form__container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={ handleSubmit }>

        <FormInput label="Display Name:" type="text" required onChange={handlerChange} name="displayName" value={displayName} />
        <FormInput label="Email:" type="email" required onChange={handlerChange} name="email" value={email} />
        <FormInput label="Password:" type="password" required onChange={handlerChange} name="password" value={password} />
        <FormInput label="Confirm Password:" type="password" required onChange={handlerChange} name="confirmPassword" value={confirmPassword} />

        <Button buttonContent="Sign Up" type="submit" />
        
      </form>

    </div>
  )
}

export default SignUpForm;