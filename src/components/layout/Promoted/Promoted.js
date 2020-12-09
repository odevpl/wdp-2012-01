import React from 'react';
import styles from './Promoted.module.scss';
import PromotedBox from '../../common/PromotedBox/PromotedBoxContainer';

const Promoted = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <PromotedBox />
      </div>
    </div>
  );
};

export default Promoted;
