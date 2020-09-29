const filterCollection = (collections, collectionId) => {
  return collections.find(
    (collection) => collection.routeName === collectionId
  );
};

export default filterCollection;
