import React from 'react';
import styles from './ComparedBox.module.scss';
import PropTypes from 'prop-types';

const ComparedBox = ({ getCompared }) => {
  return (
    <div className={styles.component}>
      {getCompared.map(item => (
        <div key={item.id} className={styles.box}>
          <img alt={'product'} src={item.image} className={styles.image}></img>
        </div>
      ))}
    </div>
  );
};

ComparedBox.propTypes = {
  getCompared: PropTypes.array,
};

export default ComparedBox;
