import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Feedback.module.scss';

const Feedback = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={'col-auto ' + styles.heading}>
            <h3>Client feedback</h3>
          </div>
          <div className={styles.dots}>
            <ul>
              <li>
                <div className={styles.active}></div>
              </li>
              <li>
                <div></div>
              </li>
              <li>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.clientFeedback}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
        <p className={styles.feedback}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className={styles.client}>
          <img
            src='https://projects.kodilla.com/secure/useravatar?avatarId=10349'
            alt='photo 1'
          ></img>
          <div>
            <h4>Anna K.</h4>
            <p>Furniture client</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Feedback.propTypes = {
  children: PropTypes.node,
};

export default Feedback;
