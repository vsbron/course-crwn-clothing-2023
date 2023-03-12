import CategoryItem from "../category-item/category-item.comp";

import "./directory.style.scss";

const Directory = ( {categories} ) => {

  return (
    <div className="categories__container">
    
      {categories.map( ( category ) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    
    </div>
  )
}



export default Directory;