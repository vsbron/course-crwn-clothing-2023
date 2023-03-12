import "./category-item.style.scss";

const CategoryItem = ( {category} ) => {

  const { title, imageUrl } = category;

  return (
    <div className="category__container">
      <div className="category__background" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category__body-container">
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  )
}

export default CategoryItem;