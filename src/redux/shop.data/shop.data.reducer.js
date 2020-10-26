const INITIALE_STATE = {
  collections: [],
};

const shopReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case "UPDATE_SHOP":
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
