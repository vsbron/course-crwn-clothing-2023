import { BaseButton, GoogleSignInButton, InvertedButton } from  "./button.style";

// Declaring the button type classes we have
export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: "google",
  inverted: "inverted"
}

// Creating a function that gets the button type and then pulls the correct button Component for use
const getButton = ( buttonType = BUTTON_TYPE_CLASSES.base) => (
  
  // This is a Map object that contains all three variations of buttons and it gives back the one listed inside buttonType argument
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]
)

const Button = ( { buttonContent, buttonType, ...otherProps } ) => {

  // Getting the actual button based on the buttonType that was passed to the Button component
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>
      {buttonContent}
    </CustomButton>
  )
}

export default Button;