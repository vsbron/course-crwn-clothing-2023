import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--color-black) 1px solid;
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
  
  &.large {
    height: 380px;
  }
`
export const DirectoryItemBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform .5s cubic-bezier(.25,.45,.45,.95);

  ${DirectoryItemContainer}:hover & {
    transform: scale(1.1);
  }
`

export const DirectoryItemBody = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: var(--color-black) 1px solid;
  background-color: var(--color-white);
  opacity: .7;
  position: absolute;
  transition: opacity .2s ease;
  
  ${DirectoryItemContainer}:hover & {
    opacity: .9;
  }

  h2 {
    font-weight: 600;
    margin: 0 6px;
    font-size: 22px;
    color: var(--color-gray);
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`