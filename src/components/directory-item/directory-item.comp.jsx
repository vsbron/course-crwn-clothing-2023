import { useNavigate } from "react-router-dom";

import { DirectoryItemContainer, DirectoryItemBackground, DirectoryItemBody } from "./directory-item.style";

const DirectoryItem = ( {category} ) => {

  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <DirectoryItemBackground imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;