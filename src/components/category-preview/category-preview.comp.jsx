import ProductCard from "../../components/product-card/product-card.comp";

import { CaterGoryPreviewContainer, CaterGoryPreviewTitle, CaterGoryPreviewList } from "./category-preview.style";
import { Link } from "react-router-dom";

const CategoryPreview = ( { category, products } ) => {

  return(
    <CaterGoryPreviewContainer>

      <h2><CaterGoryPreviewTitle><Link to={category}>{category.toUpperCase()}</Link></CaterGoryPreviewTitle></h2>
      <CaterGoryPreviewList>
        {
          products
            .filter( ( _, index ) => index < 4 )
            .map( product => <ProductCard key={product.id} product={product}/> )
        }
      </CaterGoryPreviewList>
    </CaterGoryPreviewContainer>
  )
}

export default CategoryPreview;