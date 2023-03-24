import CategoryItem from "../directory-item/directory-item.comp";

import { CategoriesContainer } from "./directory.style";

const Directory = ( {categories} ) => {

  return (
    <CategoriesContainer>
    
      {categories.map( ( category ) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    
    </CategoriesContainer>
  )
}

export default Directory;