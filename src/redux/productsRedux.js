/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getCompared = ({ products }) => {
  return products.filter(item => item.compare === true);
};

export const toggleFavorite = (products, id) =>
  products.map(product => {
    if (product.id === id) {
      product.favorites = !product.favorites;
    }
    return product;
  });

export const toggleCompare = (products, id) =>
  products.map(product => {
    if (product.id === id) {
      product.compare = !product.compare;
    }
    return product;
  });

export const setMyRating = (products, id, i) =>
  products.map(product => {
    if (product.id === id) {
      product.myStars = i;
    }
    return product;
  });

export const getNew = ({ products }) => {
  return products.filter(item => item.newFurniture === true);
};

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_FAVORITE = createActionName('CHANGE_FAVORITE');
const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');
const CHANGE_MY_RATING = createActionName('CHANGE_MY_RATING');

/* action creators */
export const changeFavorites = payload => ({ payload, type: CHANGE_FAVORITE });
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });
export const changeMyRating = payload => ({ payload, type: CHANGE_MY_RATING });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FAVORITE: {
      const prepareProducts = toggleFavorite(statePart, action.payload);
      return prepareProducts;
    }
    case CHANGE_COMPARE: {
      const prepareProducts = toggleCompare(statePart, action.payload);
      return prepareProducts;
    }
    case CHANGE_MY_RATING: {
      const prepareProducts = setMyRating(
        statePart,
        action.payload[0],
        action.payload[1]
      );
      return prepareProducts;
    }
    default:
      return statePart;
  }
}
