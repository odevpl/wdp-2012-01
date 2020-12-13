import React from 'react';
import styles from './PromotedBox.module.scss';
import ProductBox from '../ProductBox/ProductBox';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

const PromotedBox = ({ products, changeFavorites, changeCompare, getCompared }) => {
  const productId = products.filter(item => item.id === 'aenean-ru-bristique-1');
  return (
    <div className={styles.root}>
      {productId.map(item => (
        <div key={item.id} className='col-3'>
          <ProductBox
            featured={true}
            key={item.id}
            changeFavorites={changeFavorites}
            changeCompare={changeCompare}
            comparingList={getCompared}
            {...item}
          />
        </div>
      ))}
      <div className={`col-9 ${styles.col}`}>
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
        <div className={styles.slider}>
          <Button className={styles.slider}>&lt;</Button>
          <Button className={styles.slider}>&gt;</Button>
        </div>
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
