import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../common/SwipeCarousel/SwipeCarousel';

import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    visible: true,
  };

  changeActivePage = (activePage, change) => {
    if (change === 1) {
      return this.setState({
        activePage: activePage + 1,
      });
    } else if (change === -1) {
      return this.setState({
        activePage: activePage - 1,
      });
    }
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleFadeOut() {
    this.setState({ visible: false });
  }

  render() {
    const { feedbacks } = this.props;
    const { activePage } = this.state;
    const dots = [];

    for (let i = 0; i < feedbacks.length; i++) {
      dots.push(
        <li key={i}>
          <div
            onClick={() => {
              this.handlePageChange(i);
              this.handleFadeOut();
            }}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </div>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>

          <Carousel
            activePage={this.state.activePage}
            changeActivePage={(activeP, change) => {
              if (change === 1) {
                return this.setState({
                  activePage: activeP === dots.length - 1 ? activeP : activeP + 1,
                });
              } else if (change === -1) {
                return this.setState({
                  activePage: activeP === 0 ? activeP : activeP - 1,
                });
              }
            }}
          >
            <div
              className={`row ${
                this.state.visible ? `${styles.fadeIn}` : `${styles.fadeOut}`
              }`}
            >
              {feedbacks.slice(activePage * 1, (activePage + 1) * 1).map(feedback => (
                <div key={feedback.id} className={styles.clientFeedback}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </div>
                  <p className={styles.feedback}>{feedback.text}</p>
                  <div className={styles.client}>
                    <img src={feedback.img} alt='clientAvatar'></img>
                    <div>
                      <h4>{feedback.user}</h4>
                      <p>{feedback.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel>
          <div className='styles.carousel'></div>
        </div>

        <div className='styles.carousel'></div>
      </div>
    );
  }
}

Feedback.propTypes = {
  children: PropTypes.node,
  feedbacks: PropTypes.array,
};

export default Feedback;
