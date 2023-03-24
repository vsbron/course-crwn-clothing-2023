// default
// inverted
// google sign in

import { BaseButton, GoogleSignInButton, InvertedButton } from  "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: "google",
  inverted: "inverted"
}

const getButton = ( buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]
)

const Button = ( { buttonContent, buttonType, ...otherProps } ) => {

  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>
      {buttonContent}
    </CustomButton>
  )
}

export default Button;