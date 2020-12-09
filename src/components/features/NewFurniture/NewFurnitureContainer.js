import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { changeFavorites } from '../../../redux/productsRedux';
// import { changeActivePage } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  changeFavorites: newState => dispatch(changeFavorites(newState)),
  // changeActivePage: state => dispatch(changeActivePage(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
