// default
// inverted
// google sign in


import "./button.style.scss";

const BUTTON_TYPE_CLASS = {
  google: "google",
  inverted: "inverted"
}

const Button = ( { buttonContent, buttonType, ...otherProps } ) => {
  return (
    <button className={`button__container button__container--${BUTTON_TYPE_CLASS[buttonType]}`} {...otherProps} >
      {buttonContent}
    </button>
  )
}

export default Button;