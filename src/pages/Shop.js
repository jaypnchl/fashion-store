import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionOverview from "../components/CollectionOverview";
import Collection from "./Collection";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../firebase/firebase.utils";
import { updateCollections } from "../redux/shop/ShopAction";
import WithSpinner from "../components/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<CollectionOverviewWithSpinner isLoading={loading} />}
          ></Route>
          <Route
            path=":collectionId"
            element={<CollectionWithSpinner isLoading={loading} />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
