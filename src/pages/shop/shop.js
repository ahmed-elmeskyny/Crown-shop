import React from "react";
import SHOP_DATA from "./shop-data";
import PreviewCollection from "../../components/Preview-collection/Preview-collection";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <PreviewCollection
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
