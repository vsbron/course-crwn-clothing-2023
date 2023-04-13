import styled from "styled-components";
import Button from "../button/button.comp";

export const PaymentFormCont = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormCont = styled.form`
  height: 100px;
  min-width: 500px;
`

export const PaymentButton = styled(Button)`
  margin: 30px 0 0 auto;
`