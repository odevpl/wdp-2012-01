import React, { useEffect, useSelector, useState, useDispatch } from 'react';
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
  return width;
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
