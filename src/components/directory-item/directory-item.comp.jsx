import { useNavigate } from "react-router-dom";

import { DirectoryItemContainer, DirectoryItemBackground, DirectoryItemBody } from "./directory-item.style";

const DirectoryItem = ( {category} ) => {

  const { title, imageUrl, route } = category;        // Destructuring the category we got from DirectoryItem calling

  const navigate = useNavigate();                     // useNavigate hook for linking the tile
  const onNavigateHandler = () => navigate(route);    // Button onClick handler that provides the link to the route we got from the category object


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