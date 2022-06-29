import CollectionItem from "../components/CollectionItem";

import { selectCollection } from "../redux/shop/ShopSelector";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Collection() {
  const { collectionId } = useParams();

  const collection = useSelector((state) =>
    selectCollection(collectionId)(state)
  );
  const { title, items } = collection;

  return (
    <div className="flex flex-col">
      <p className="text-[38px]  mx-auto mb-8">{title}</p>
      <div className="mb-8 flex flex-col sm:flex-row sm:flex-wrap ">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
