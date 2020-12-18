import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingStars.module.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RatingStars extends React.Component {
  render() {
    const { stars, myStars, id, changeMyRating } = this.props;
    const load = [id];
    if (myStars > 0) {
      return (
        <div className={styles.component}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i}>
              {i <= myStars ? (
                <FontAwesomeIcon
                  className={styles.myRatingActive}
                  icon={faStar}
                  onClick={() => {
                    load.push(i);
                    changeMyRating(load);
                  }}
                >
                  {i} stars
                </FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  className={styles.myRatingDeactive}
                  icon={farStar}
                  onClick={() => {
                    load.push(i);
                    changeMyRating(load);
                  }}
                >
                  {i} stars
                </FontAwesomeIcon>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className={styles.component}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} id={i}>
              {i <= stars ? (
                <FontAwesomeIcon
                  onClick={() => {
                    load.push(i);
                    changeMyRating(load);
                  }}
                  icon={faStar}
                >
                  {i} stars
                </FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  icon={farStar}
                  onClick={() => {
                    load.push(i);
                    changeMyRating(load);
                  }}
                >
                  {i} stars
                </FontAwesomeIcon>
              )}
            </div>
          ))}
        </div>
      );
    }
  }
}

RatingStars.propTypes = {
  stars: PropTypes.number,
  myStars: PropTypes.number,
  id: PropTypes.string,
  changeMyRating: PropTypes.func,
  products: PropTypes.array,
};

export default RatingStars;
