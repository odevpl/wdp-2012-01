import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row'>
          <div className={`col ${styles.col}`}>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <p>About us</p>
                </li>
                <li>
                  <p>Policy</p>
                </li>
                <li>
                  <p>Conditions</p>
                </li>
                <li>
                  <p>Online support</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col ${styles.col}`}>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <p>Login</p>
                </li>
                <li>
                  <p>My cart</p>
                </li>
                <li>
                  <p>Wishlist</p>
                </li>
                <li>
                  <p>Checkout</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col ${styles.col}`}>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <p>Specials</p>
                </li>
                <li>
                  <p>New products</p>
                </li>
                <li>
                  <p>Best Sellers</p>
                </li>
                <li>
                  <p>Out Stores</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col ${styles.col}`}>
            <div className={styles.menuWrapper}>
              <h6>Orders</h6>
              <ul>
                <li>
                  <p>Payment options</p>
                </li>
                <li>
                  <p href='#'>Shipping and delivery</p>
                </li>
                <li>
                  <p href='#'>Returns</p>
                </li>
                <li>
                  <p>Shipping</p>
                </li>
              </ul>
            </div>
            <img src='./images/cards.png' alt='Supported credit cards' />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={`col ${styles.emptySpot}`}></div>
          <div className={'col text-center ' + styles.copyright}>
            <p>©Copyright 2016 Bazar | All Rights Reserved</p>
          </div>
          <div className={'col text-right ' + styles.socialMedia}>
            <ul>
              <li>
                <a href='https://twitter.com/'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='https://myaccount.google.com/'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='https://pl.linkedin.com/'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='https://pl.pinterest.com/'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
