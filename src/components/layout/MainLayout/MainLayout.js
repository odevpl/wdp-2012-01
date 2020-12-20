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
    let initialWidth = window.innerWidth;
    let initialWidthType;

    if (initialWidth > 1025) {
      initialWidthType = 'desktop';
    } else if (768 <= initialWidth && initialWidth <= 1024) {
      initialWidthType = 'tablet';
    } else if (initialWidth <= 767) {
      initialWidthType = 'mobile';
    }

    window.addEventListener('resize', () => {
      let currentWidth = window.innerWidth;

      let currentWidthType;

      if (window.innerWidth > 1025) {
        currentWidthType = 'desktop';
      } else if (768 <= window.innerWidth && window.innerWidth <= 1024) {
        currentWidthType = 'tablet';
      } else if (window.innerWidth <= 767) {
        currentWidthType = 'mobile';
      }

      if (initialWidth !== currentWidth && initialWidthType !== currentWidthType) {
        this.props.changeScreenWidth(window.innerWidth);
        initialWidth = currentWidth;
        initialWidthType = currentWidthType;
      }
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
