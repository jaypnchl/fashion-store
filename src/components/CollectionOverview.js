import { connect } from "react-redux";
import CollectionPreview from "../components/CollectionPreview";
import { selectCollectionsForPreview } from "../redux/shop/ShopSelector";
import { createStructuredSelector } from "reselect";

function CollectionOverview({ collections }) {
  return (
    <div className=" py-4">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
