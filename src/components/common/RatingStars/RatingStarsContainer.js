import { connect } from 'react-redux';
import RatingStars from './RatingStars';
import { getAll } from '../../../redux/productsRedux.js';
import { changeMyRating } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  changeMyRating: newState => dispatch(changeMyRating(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingStars);
