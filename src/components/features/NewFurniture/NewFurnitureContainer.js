import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getScreenWidth } from '../../../redux/screenWidthRedux.js';
import { changeFavorites } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  screenWidth: getScreenWidth(state),
});

const mapDispatchToProps = dispatch => ({
  changeFavorites: newState => dispatch(changeFavorites(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
