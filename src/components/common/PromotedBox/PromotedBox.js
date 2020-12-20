import React, { useState } from 'react';
import styles from './PromotedBox.module.scss';
import ProductBox from '../ProductBox/ProductBox';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import Carousel from '../SwipeCarousel/SwipeCarousel';

const PromotedBox = ({ products, changeFavorites, changeCompare, getCompared }) => {
  const productId = products.filter(item => item.id === 'aenean-ru-bristique-1');
  const [activePage, setActivePage] = useState(0);
  const swipeRight = () => {
    setActivePage(activePage === 1 ? activePage : activePage + 1);
  };
  const swipeLeft = () => {
    setActivePage(activePage === -1 ? activePage : activePage - 1);
  };
  return (
    <div className={styles.root}>
      {productId.map(item => (
        <div key={item.id} className={`col-3 ${styles.colProduct}`}>
          <ProductBox
            featured={true}
            key={item.id}
            changeFavorites={changeFavorites}
            changeCompare={changeCompare}
            getCompared={getCompared}
            {...item}
          />
        </div>
      ))}
      <div className={`col-9 ${styles.col}`}>
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
          {activePage === 0 && (
            <div className={styles.activePage}>
              <img
                alt='furnitureImage'
                src='https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                className={styles.image}
              ></img>
              <Button className={styles.button} variant='small'>
                SHOP NOW
              </Button>
              <div className={styles.promotedText}>
                <h3>
                  INDOOR <strong>FURNITURE</strong>
                </h3>
                <h2>SAVE UP TO 50% OF ALL FURNITURE</h2>
              </div>
            </div>
          )}
          {activePage === -1 && (
            <div className={styles.activePage}>
              <img
                alt='furnitureImage'
                src='https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                className={styles.image}
              ></img>
              <Button className={styles.button} variant='small'>
                SHOP NOW
              </Button>
              <div className={styles.promotedText}>
                <h3>
                  BEST <strong>FURNITURE</strong>
                </h3>
                <h2>SALE LASTS ONLY THIS WEEK</h2>
              </div>
            </div>
          )}
          {activePage === 1 && (
            <div className={styles.activePage}>
              <img
                alt='furnitureImage'
                src='https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                className={styles.image}
              ></img>
              <Button className={styles.button} variant='small'>
                SHOP NOW
              </Button>
              <div className={styles.promotedText}>
                <h3>
                  BEST <strong>FURNITURE</strong>
                </h3>
                <h2>DONT MISS IT</h2>
              </div>
            </div>
          )}
          <div className={styles.slider}>
            <Button onClick={swipeLeft} className={styles.slider}>
              &lt;
            </Button>
            <Button onClick={swipeRight} className={styles.slider}>
              &gt;
            </Button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

PromotedBox.propTypes = {
  changeCompare: PropTypes.func,
  changeFavorites: PropTypes.func,
  featured: PropTypes.bool,
  getCompared: PropTypes.array,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

export default PromotedBox;
