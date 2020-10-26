import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/collection";
import CollectionOverview from "../../components/collection-overview/collection_overview";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import { updateShopData } from "../../redux/shop.data/shop.data.action";
import WithSpinner from "../../components/with-spinner/with-spinner.jsx";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnaoshot = null;

  componentDidMount() {
    const { updateShopData } = this.props;

    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnaoshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const NewColection = convertCollectionSnapshotToMap(snapshot);
        updateShopData(NewColection);
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${this.props.match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapdispatch = (dispatch) => ({
  updateShopData: (collection) => dispatch(updateShopData(collection)),
});

export default connect(null, mapdispatch)(Shop);
