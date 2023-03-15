import "./form-input.style.scss";

const FormInput = ( { label, ...otherProps } ) => {
  return (
    <div className="form__group">
      <input className="form__input" {...otherProps} />
      {/* Short circuiting for displaying the layer */}
      { label && (<label className={` form__label ${otherProps.value.length ? "form__label--shrink" : ""}`}>{label}</label>) }
    </div>
  )
}

export default FormInput;