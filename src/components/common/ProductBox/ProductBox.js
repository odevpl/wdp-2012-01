import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Timer from '../../features/Timer/Timer';
import RatingStars from '../RatingStars/RatingStarsContainer';

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
  compare,
  getCompared,
  myStars,
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
      <RatingStars id={id} stars={stars} myStars={myStars} />
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
          noHover
          onClick={() => {
            if (getCompared.find(item => item.id === id)) {
              changeCompare(id);
            } else if (getCompared.length <= 3) {
              changeCompare(id);
            }
          }}
          variant={compare ? 'active' : 'disactive'}
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
  makeComparingList: PropTypes.func,
  compare: PropTypes.bool,
  getCompared: PropTypes.array,
  myStars: PropTypes.number,
};

export default ProductBox;
