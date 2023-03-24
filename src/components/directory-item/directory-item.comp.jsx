import { DirectoryItemContainer, DirectoryItemBackground, DirectoryItemBody } from "./directory-item.style";

const DirectoryItem = ( {category} ) => {

  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <DirectoryItemBackground style={{ backgroundImage: `url(${imageUrl})` }} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;