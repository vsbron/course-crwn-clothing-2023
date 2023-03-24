import styled from "styled-components";

export const CaterGoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const CaterGoryPreviewTitle = styled.span`
  font-size: 2.8rem;
  margin-bottom: 25px;
  cursor: pointer;
`

export const CaterGoryPreviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 10px;
`