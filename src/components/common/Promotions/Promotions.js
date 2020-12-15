import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';

const Promotions = ({ Promotion }) => (
  <div className={`container ${styles.container}`}>
    <div className='row'>
      <div className={`col-md-6 col-sm-12 ${styles.column}`}>
        <img src={Promotion.sofa} alt='dsa' />
        <div className={styles.wrapperText}>
          <h2>{Promotion.text1a}</h2>
          <h1>{Promotion.text1b}</h1>
          <p>{Promotion.textbargain}</p>
        </div>
      </div>
      <div className={`col-md-6 col-sm-12 ${styles.wrapperColumn}`}>
        <div className={`col-12 ${styles.column1}`}>
          <img className={styles.firstChair} src={Promotion.firstChair} alt='dsa' />
          <div className={styles.secondWrapper}>
            <h1 className={styles.boldText}>{Promotion.text2a}</h1>
            <h1>{Promotion.text2b}</h1>
            <h5>{Promotion.text2c}</h5>
            <p>{Promotion.textPrice}</p>
          </div>
          <img className={styles.secondChair} src={Promotion.secondChair} alt='dsa' />
        </div>
        <div className={`col-12 ${styles.column2}`}>
          <img src={Promotion.bed} alt='dsa' />
          <div className={styles.thirdWrapper}>
            <p className={styles.paragraphBold}>{Promotion.text3a}</p>
            <p className={styles.paragraphNormal}>{Promotion.text3b}</p>
            <p className={styles.paragraphInfo}>{Promotion.textInfo}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Promotions.propTypes = {
  Promotion: PropTypes.object,
};

export default Promotions;
