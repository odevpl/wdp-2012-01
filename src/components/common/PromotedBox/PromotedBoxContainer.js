import { connect } from 'react-redux';

import PromotedBox from './PromotedBox';

import { getNew } from '../../../redux/productsRedux.js';
import { changeFavorites, changeCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  changeFavorites: newState => dispatch(changeFavorites(newState)),
  changeCompare: newState => dispatch(changeCompare(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotedBox);
