import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionOverview from "../components/CollectionOverview";
import Collection from "./Collection";

const Shop = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CollectionOverview />}></Route>
        <Route path=":collectionId" element={<Collection />}></Route>
      </Routes>
    </div>
  );
};

export default Shop;
