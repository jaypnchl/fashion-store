function CollectionItem({ name, price, imageUrl }) {
  return (
    <div className="flex flex-col mb-6">
      <img
        className="h-[550px] w-[400px] min-w-[30%] min-h-[30%] object-cover"
        src={imageUrl}
        alt=""
      />
      <div className="flex justify-between text-2xl">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
