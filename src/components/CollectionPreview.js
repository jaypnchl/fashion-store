import CollectionItem from "./CollectionItem";

function CollectionPreview({ title, items, imageUrl }) {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <div>
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
