import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <div href='#' className={styles.active}>
                Home
              </div>
            </li>
            <li>
              <div href='#'>Furniture</div>
            </li>
            <li>
              <div href='#'>Chair</div>
            </li>
            <li>
              <div href='#'>Table</div>
            </li>
            <li>
              <div href='#'>Sofa</div>
            </li>
            <li>
              <div href='#'>Bedroom</div>
            </li>
            <li>
              <div href='#'>Blog</div>
            </li>
          </ul>
        </div>
        <button className={styles.hamburger}>
          <FontAwesomeIcon className={styles.icon} icon={faHamburger} />
        </button>
        <div className='col'>
          <ProductSearch />
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
