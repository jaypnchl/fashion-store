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

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<CollectionOverview />}></Route>
          <Route path=":collectionId" element={<Collection />}></Route>
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
