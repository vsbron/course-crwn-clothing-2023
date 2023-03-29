import { FormInputLabel, FormInputContainer, FormGroup } from "./form-input.style";

const FormInput = ( { label, ...otherProps } ) => {
  
  return (
    <FormGroup>

      <FormInputContainer {...otherProps} />

      {/* Short circuiting for displaying the layer */}
      { label && (<FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>) }

    </FormGroup>
  )
}

export default FormInput;