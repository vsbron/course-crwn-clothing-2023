import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  border-bottom: var(--color-dark-gray) 1px solid;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const CheckoutItemImage = styled.div`
  width: 20%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const CheckoutItemName = styled.span`
  width: 20%
`

export const CheckoutItemQuantity = styled.span`
  width: 20%;
  display: flex;
`

export const CheckoutItemQuantityValue = styled.span`
  margin: 0 10px
`

export const CheckoutItemPrice = styled.span`
  width: 20%
`

export const CheckoutArrow = styled.div`
  cursor: pointer
`

export const RemoveButton = styled.div`
  width: 5%;
  cursor: pointer;
`