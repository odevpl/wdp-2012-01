import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Carousel from '../../common/SwipeCarousel/SwipeCarousel';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
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

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (
      this.state.activeCategory !== prevState.activeCategory ||
      this.state.activePage !== prevState.activePage
    ) {
      setTimeout(() => this.setState({ visible: true }), 1000);
    }
  }

  handleFadeOut() {
    this.setState({ visible: false });
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
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
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <div
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => {
                          this.handleCategoryChange(item.id);
                          this.handleFadeOut();
                        }}
                      >
                        {item.name}
                      </div>
                    </li>
                  ))}
                </ul>
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
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div key={item.id} className='col-3'>
                    <ProductBox
                      changeFavorites={this.props.changeFavorites}
                      {...item}
                    />
                  </div>
                ))}
            </div>
          </Carousel>
          <div className='styles.carousel'></div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  changeFavorites: PropTypes.func,
  changeActivePage: PropTypes.func,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
