import { connect } from 'react-redux';
import MainLayout from './MainLayout';

import { screenWidth, changeScreenWidth } from '../../../redux/screenWidthRedux';

const mapStateToProps = state => ({
  screenWidth: screenWidth(state),
});

const mapDispatchToProps = dispatch => ({
  changeScreenWidth: newState => dispatch(changeScreenWidth(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
