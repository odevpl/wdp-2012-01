import React from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

const Carousel = ({ children, activePage, changeActivePage }) => {
  Carousel.propTypes = {
    children: PropTypes.node,
    activePage: PropTypes.node,
    changeActivePage: PropTypes.func,
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changeActivePage(activePage, 1),
    onSwipedRight: () => changeActivePage(activePage, -1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return <div {...handlers}>{children} </div>;
};

export default Carousel;

