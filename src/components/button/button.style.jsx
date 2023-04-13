import styled from "styled-components";
import { SpinnerContainer } from "../spinner/spinner.style";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  font-size: 18px;
  background-color: var(--color-black);
  color: var(--color-white);
  text-transform: uppercase;
  font-family: inherit;
  font-weight: light;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
    border: var(--color-black) 1px solid;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: var(--color-blue-1);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-blue-2);
    color: var(--color-white);
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: var(--color-white);
  color: var(--color-black);
  border: 1px solid var(--color-black);

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
    border: none;
  }
`

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`