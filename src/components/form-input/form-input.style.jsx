import styled from "styled-components";

const ShrinkLabelStyles = `
  top: -14px;
  font-size: 12px;
  color: var(--color-black);
`

export const FormInputLabel = styled.label`
  color: var(--color-gray);
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all .3s ease;

  ${ ({shrink}) => shrink && ShrinkLabelStyles }
`

export const FormInputContainer = styled.input`
  background: none;
  background-color: var(--color-white);
  color: var(--color-gray);
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: var(--color-gray) 1px solid;
  margin: 25px 0;

  &:focus {
    outline: none;

    & ~ ${FormInputLabel} {
      ${ShrinkLabelStyles}
    }
  }
`

export const FormGroup = styled.div`
  position: relative;
  margin: 4.5rem 0;

  input[type='password'] {
    letter-spacing: .3em;
  }
`