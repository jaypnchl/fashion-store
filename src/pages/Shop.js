import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionsOverviewContainer from "../components/CollectionsOverviewContainer";
import CollectionContainer from "../components/CollectionContainer";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../redux/shop/ShopAction";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<CollectionsOverviewContainer />}></Route>
          <Route path=":collectionId" element={<CollectionContainer />}></Route>
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
