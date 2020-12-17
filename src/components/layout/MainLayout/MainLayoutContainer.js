import { connect } from 'react-redux';

import MainLayout from './MainLayout';

import { changeScreenWidth } from '../../../redux/screenWidthRedux';

const mapDispatchToProps = dispatch => ({
    changeScreenWidth: newState => dispatch(changeScreenWidth(newState)),
  });

  export default connect(mapDispatchToProps)(NewFurniture);