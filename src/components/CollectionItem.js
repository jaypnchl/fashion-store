function CollectionItem({ name, price, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
}

export default CollectionItem;
