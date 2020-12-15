import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotions from '../../common/Promotions/PromotionsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
