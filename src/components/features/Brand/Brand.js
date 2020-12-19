import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Brand.module.scss';
import Button from '../../common/Button/Button';

import Carousel from '../../common/SwipeCarousel/SwipeCarousel';

const Brand = ({ brand }) => {
  const [activePage, setActivePage] = useState(0);
  const swipeRight = event => {
    event.preventDefault();
    setActivePage(activePage === 1 ? activePage : activePage + 1);
  };
  const swipeLeft = event => {
    event.preventDefault();
    setActivePage(activePage === -1 ? activePage : activePage - 1);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.topLine}></div>
        <Carousel
          activePage={activePage}
          changeActivePage={(activeP, change) => {
            if (change === 1) {
              return setActivePage(activeP === 1 ? activeP : activeP + 1);
            } else if (change === -1) {
              return setActivePage(activeP === -1 ? activeP : activeP - 1);
            }
          }}
        >
          <div className='row'>
            <div className={styles.slider}>
              <Button onClick={swipeLeft} className={styles.slider}>
                &lt;
              </Button>
            </div>

            {activePage === 0 && (
              <div className={styles.activePage}>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image1} alt='brandLogo1' />
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image2} alt='brandLogo2'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image3} alt='brandLogo3'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image4} alt='brandLogo4'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image5} alt='brandLogo5'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image6} alt='brandLogo6'></img>
                </div>
              </div>
            )}

            {activePage === -1 && (
              <div className={styles.activePage}>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image7} alt='brandLogo7' />
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image8} alt='brandLogo8'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image9} alt='brandLogo9'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image10} alt='brandLogo10'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image11} alt='brandLogo11'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image12} alt='brandLogo12'></img>
                </div>
              </div>
            )}

            {activePage === 1 && (
              <div className={styles.activePage}>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image13} alt='brandLogo13' />
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image14} alt='brandLogo14'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image15} alt='brandLogo15'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image1} alt='brandLogo1'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image2} alt='brandLogo2'></img>
                </div>
                <div className={`col ${styles.col}`}>
                  <img src={brand.image3} alt='brandLogo3'></img>
                </div>
              </div>
            )}

            <div className={styles.slider}>
              <Button onClick={swipeRight} className={styles.slider}>
                &gt;
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className={styles.bottomLine}></div>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
