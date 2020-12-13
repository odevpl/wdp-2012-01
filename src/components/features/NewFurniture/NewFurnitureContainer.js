import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import {
  changeFavorites,
  changeCompare,
  getCompared,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  getCompared: getCompared(state),
});

const mapDispatchToProps = dispatch => ({
  changeFavorites: newState => dispatch(changeFavorites(newState)),
  changeCompare: newState => dispatch(changeCompare(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
