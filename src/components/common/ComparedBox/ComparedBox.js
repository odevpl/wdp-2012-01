import React from 'react';
import styles from './ComparedBox.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ComparedBox = ({ getCompared, changeCompare }) => {
  const isActive = getCompared.length;

  if (isActive) {
    return (
      <div className={styles.component}>
        {getCompared.map(item => (
          <div
            key={item.id}
            className={styles.box}
            onClick={() => changeCompare(item.id)}
          >
            <img alt={'product'} src={item.image} className={styles.image}></img>
            <div className={styles.close}>x</div>
          </div>
        ))}
        <Button className={styles.button}>COMPARE</Button>
      </div>
    );
  } else {
    return '';
  }
};

ComparedBox.propTypes = {
  getCompared: PropTypes.array,
  changeCompare: PropTypes.func,
};

export default ComparedBox;
