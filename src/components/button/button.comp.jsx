// default
// inverted
// google sign in


import "./button.style.scss";

const BUTTON_TYPE_CLASS = {
  google: "google",
  inverted: "inverted"
}

const Button = ( { children, buttonType, ...otherProps } ) => {
  return (
    <button className={`button__container button__container--${BUTTON_TYPE_CLASS[buttonType]}`} {...otherProps} >
      {children}
    </button>
  )
}

export default Button;