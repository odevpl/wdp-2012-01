import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promoted from '../Promoted/Promoted';
import Feedback from '../../features/Feedback/FeedbackContainer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <Promoted />
    {children}
    <Feedback />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
