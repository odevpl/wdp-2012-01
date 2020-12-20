import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promoted from '../Promoted/Promoted';
import Feedback from '../../features/Feedback/FeedbackContainer';


class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    changeScreenWidth: PropTypes.func,
  };

  render() {
    this.props.changeScreenWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      this.props.changeScreenWidth(window.innerWidth);
    });

    return (
      <div>
        <Header />
        <Promoted />
        {this.props.children}
        <Footer />
        <Feedback />
      </div>
    );
  }
}

export default MainLayout;
