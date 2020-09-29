export const HideCart = () => ({
  type: "TOGGLE_HIDDEN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const decreaseQuantity = (item) => ({
  type: "Decrease",
  payload: item,
});
