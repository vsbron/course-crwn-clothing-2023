import ProductCard from "../../components/product-card/product-card.comp";

import { CategoryPreviewContainer, CategoryPreviewTitle, CategoryPreviewList } from "./category-preview.style";
import { Link } from "react-router-dom";

const CategoryPreview = ( { category, products } ) => {

  return(
    <CategoryPreviewContainer>

      <h2><CategoryPreviewTitle><Link to={category}>{category.toUpperCase()}</Link></CategoryPreviewTitle></h2>
      <CategoryPreviewList>
        {
          products
            .filter( ( _, index ) => index < 4 )
            .map( product => <ProductCard key={product.id} product={product}/> )
        }
      </CategoryPreviewList>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;