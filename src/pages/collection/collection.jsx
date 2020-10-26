import React from "react";
import "./collection.scss";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import filteredCollection from "../../redux/shop.data/shop-data.utils";

const Collection = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2 className="title"> {collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownporps) => ({
  collection: filteredCollection(
    state.shop.collections,
    ownporps.match.params.collectionId
  ),
});

export default connect(mapStateToProps)(Collection);
