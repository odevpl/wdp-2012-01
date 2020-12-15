import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brand.module.scss';
import Button from '../../common/Button/Button';

const Brand = ({ brand }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.topLine}></div>
      <div className='row'>
        <div className={styles.slider}>
          <Button className={styles.slider}>&lt;</Button>
        </div>
        <div className={`col ${styles.col}`}>
          <img src={brand.imageFirst} alt='brandLogo1' />
        </div>
        <div className={`col ${styles.col}`}>
          <img
            src={brand.imageSecond}
            alt='brandLogo2'
          ></img>
        </div>
        <div className={`col ${styles.col}`}>
          <img
            src={brand.imageThird}
            alt='brandLogo3'
          ></img>
        </div>
        <div className={`col ${styles.col}`}>
          <img
            src={brand.imageFourth}
            alt='brandLogo4'
          ></img>
        </div>
        <div className={`col ${styles.col}`}>
          <img
            src={brand.imageFifth}
            alt='brandLogo5'
          ></img>
        </div>
        <div className={`col ${styles.col}`}>
          <img
            src={brand.imageSixth}
            alt='brandLogo6'
          ></img>
        </div>
        <div className={styles.slider}>
          <Button className={styles.slider}>&gt;</Button>
        </div>
      </div>
      <div className={styles.bottomLine}></div>
    </div>
  </div>
);

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
