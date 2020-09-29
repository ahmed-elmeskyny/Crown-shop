import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/collection";
import CollectionOverview from "../../components/collection-overview/collection_overview";
const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
