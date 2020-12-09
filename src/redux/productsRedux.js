/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const toggleFavorite = (products, id) =>
  products.map(product => {
    if (product.id === id) {
      product.favorites = !product.favorites;
    }
    return product;
  });

// export const changeActivePage = (activePage, change) => {
//   if(change === 1){
//     return this.setState({
//       activePage: activePage + 1 });}

//   else if(change === -1){
//     return this.setState({
//       activePage: activePage - 1 });}
// };

export const getNew = ({ products }) => {
  return products.filter(item => item.newFurniture === true);
};

/* action name creator */
const reducerName = 'favorites';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_FAVORITE = createActionName('CHANGE_FAVORITE');

/* action creators */
export const changeFavorites = payload => ({ payload, type: CHANGE_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FAVORITE: {
      const prepareProducts = toggleFavorite(statePart, action.payload);
      return prepareProducts;
    }
    default:
      return statePart;
  }
}
