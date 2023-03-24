import SignInForm from "../../components/sign-in-form/sign-in-form.com";
import SignUpForm from "../../components/sign-up-form/sign-up-form.comp";

import { AuthContainer } from "./authentication.styles";

const Authentication = () => {

  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  )
}

export default Authentication;