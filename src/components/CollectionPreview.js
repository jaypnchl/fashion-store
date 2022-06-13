import CollectionItem from "./CollectionItem";

function CollectionPreview({ title, items, imageUrl }) {
  return (
    <div className="flex flex-col ">
      <h1 className="text-4xl font-semibold mb-6">{title.toUpperCase()}</h1>
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
