import { connect } from 'react-redux';

import PromotedBox from './PromotedBox';

import { getNew } from '../../../redux/productsRedux.js';
import { changeFavorites } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  changeFavorites: newState => dispatch(changeFavorites(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotedBox);
