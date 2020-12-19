import { connect } from 'react-redux';

import Brand from './Brand';

import { getImage } from '../../../redux/brandRedux.js';

const mapStateToProps = state => ({
  brand: getImage(state),
});

export default connect(mapStateToProps)(Brand);
