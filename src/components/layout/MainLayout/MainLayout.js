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
  // const dispatch = useDispatch();
  console.log(useWindowWidth());

  // const getWidth = () =>  {
  //   dispatch({
  //     type: "CHANGE_SCREEN_WIDTH",
  //     payload: {
  //       screenWidth: screenWidth,
  //     }
  //   })
  // }

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
