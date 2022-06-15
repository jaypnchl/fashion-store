import React from "react";
import CollectionPreview from "../components/CollectionPreview";
import SHOP_DATA from "../data/shop.data";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;

    return (
      <div className=" py-4">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
