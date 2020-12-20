import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promoted from '../Promoted/Promoted';
import Feedback from '../../features/Feedback/Feedback';

class MainLayout extends React.Component {
  static propTypes = {
    changeScreenWidth: PropTypes.func,
    children: PropTypes.node,
  };

  state = {
    screenWidth: window.innerWidth,
  };

  handleResize = () => {
    const changeScreenWidth = this.props.changeScreenWidth(this.state.screenWidth);
    this.setState({
      screenWidth: changeScreenWidth,
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        <Header />
        <Promoted />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
