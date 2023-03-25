import styled from "styled-components";

export const DirectoryItemBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${ ( { imageUrl} ) => `url( ${imageUrl} )` };
  background-size: cover;
  background-position: center;
  transition: transform .5s cubic-bezier(.25,.45,.45,.95);
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

  h2 {
    font-weight: 600;
    margin: 0 6px;
    font-size: 22px;
    color: var(--color-gray);
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`

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

    & ${DirectoryItemBackground} {
      transform: scale(1.1);
    }

    & ${DirectoryItemBody} {
      opacity: .9;
    }
  }
`