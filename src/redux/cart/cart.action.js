export const HideCart = () => ({
  type: "TOGGLE_HIDDEN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});
