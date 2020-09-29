import SHOP_DATA from "./shop-data";

const INITIALE_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
