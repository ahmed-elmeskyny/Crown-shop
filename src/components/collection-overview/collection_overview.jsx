import React from "react";
import "./collection-overview.scss";
import { connect } from "react-redux";
import PreviewCollection from "../Preview-collection/Preview-collection";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map((collection) => (
      <PreviewCollection
        key={collection.id}
        title={collection.title}
        items={collection.items}
      />
    ))}
    ;
  </div>
);
const mapStateToProps = (state) => ({
  collections: state.shop.collections,
});
export default connect(mapStateToProps)(CollectionOverview);
