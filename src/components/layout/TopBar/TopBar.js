import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <div className={styles.topBarTile}>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </div>
            </li>
            <li>
              <div className={styles.topBarTile}>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </div>
            </li>
            <li>
              <div className={styles.topBarTile}>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </div>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <div className={styles.topBarTile}>
                <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
              </div>
            </li>
            <li>
              <div className={styles.topBarTile}>
                <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
              </div>
            </li>
            <li>
              <div className={styles.topBarTile}>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
