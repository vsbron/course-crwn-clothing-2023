import "./directory-item.style.scss";

const DirectoryItem = ( {category} ) => {

  const { title, imageUrl } = category;

  return (
    <div className="directory-item__container">
      <div className="directory-item__background" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="directory-item__body">
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  )
}

export default DirectoryItem;