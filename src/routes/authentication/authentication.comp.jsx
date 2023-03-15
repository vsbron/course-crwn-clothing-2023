import SignInForm from "../../components/sign-in-form/sign-in-form.com";
import SignUpForm from "../../components/sign-up-form/sign-up-form.comp";

import "./authentication.styles.scss";

const Authentication = () => {

  return (
    <div className="auth__container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;