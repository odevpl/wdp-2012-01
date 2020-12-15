import { connect } from 'react-redux';
import Promotions from './Promotions';

const mapStateToProps = state => ({
  Promotion: state.Promotion,
});

export default connect(mapStateToProps)(Promotions);
