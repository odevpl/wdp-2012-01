import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promoted from '../Promoted/Promoted';

function useWindowWidth() {
  const [width, setWidth] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setWidth([window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);
  }, []);
  if (width <= 767) {
    return width + 'px' + ' ' + 'Mobile';
  } else if (768 <= width && width <= 1024) {
    return width + 'px' + ' ' + 'Tablet';
  } else if (width > 1025) {
    return width + 'px' + ' ' + 'Desktop';
  }
}

const MainLayout = ({ children }) => {
  console.log(useWindowWidth());
  return (
    <div>
      <Header />
      <Promoted />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
