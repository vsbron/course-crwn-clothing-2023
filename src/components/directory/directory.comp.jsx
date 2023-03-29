import CategoryItem from "../directory-item/directory-item.comp";

import { CategoriesContainer } from "./directory.style";

// Listing the details for our tiles on the home page.
// These include the id, title, url of the image and the path it leads to
const categories =[
  { id: 1, title: "Hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png", route: "shop/hats" },
  { id: 2, title: "Jackets", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png", route: "shop/jackets" },
  { id: 3, title: "Sneakers", imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png", route: "shop/sneakers" },
  { id: 4, title: "Womens", imageUrl: "https://i.ibb.co/GCCdy8t/womens.png", route: "shop/womens" },
  { id: 5, title: "Mens", imageUrl: "https://i.ibb.co/R70vBrQ/mens.png", route: "shop/mens" }
]

const Directory = () => {

  return (
    <CategoriesContainer>
    
      {categories.map( ( category ) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    
    </CategoriesContainer>
  )
}

export default Directory;