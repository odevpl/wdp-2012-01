import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Timer from '../../features/Timer/Timer';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  oldPrice,
  favorites,
  id,
  changeFavorites,
  featured,
  changeCompare,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {featured && (
        <div className={styles.hotDeals}>
          {' '}
          <div className={styles.hotDealsTitle}>HOT DEALS</div>{' '}
          <div className={styles.dots}>
            <ul>
              <li>
                <div></div>
              </li>
              <li>
                <div></div>
              </li>
              <li>
                <div></div>
              </li>
            </ul>{' '}
          </div>
        </div>
      )}
      <img alt='furnitureImage' src={image} className={styles.image}></img>
      {featured ? (
        <div className={styles.productTimer}>
          <Timer startDate={new Date().getTime() + 2592000000} />
        </div>
      ) : null}
      {featured ? null : promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        {featured ? null : <Button variant='small'>Quick View</Button>}
        {featured ? (
          <Button className={styles.featuredButton} variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        ) : (
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        )}
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i}>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}>Watch</FontAwesomeIcon>
        </Button>
        <Button
          noHover
          onClick={() => changeFavorites(id)}
          variant={favorites ? 'active' : 'disactive'}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          // noHover
          onClick={() => changeCompare(id)}
          // variant={favorites ? 'active' : 'disactive'}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      {oldPrice ? (
        <div className={styles.oldPrice}>
          <div className={styles.oldPriceValue}>$ {oldPrice}</div>
        </div>
      ) : (
        ''
      )}

      <div className={styles.price}>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
  favorites: PropTypes.bool,
  id: PropTypes.string,
  changeFavorites: PropTypes.func,
  featured: PropTypes.bool,
  changeCompare: PropTypes.func,
};

export default ProductBox;
