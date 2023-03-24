import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: var(--color-dark-gray) 1px solid;
`

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 20%;

  &:last-child { width: 5% }
`

export const CheckoutTotal = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 3.6rem;
`