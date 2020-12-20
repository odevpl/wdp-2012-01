import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Carousel from '../../common/SwipeCarousel/SwipeCarousel';
import ComparedBox from '../../common/ComparedBox/ComparedBox';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    visible: true,
    comparinList: [],
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
    const {
      categories,
      products,
      changeFavorites,
      changeCompare,
      getCompared,
      screenWidth,
    } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);

    let pagesCount = Math.ceil(categoryProducts.length / 8);

    if (screenWidth <= 767) {
      pagesCount = Math.ceil(categoryProducts.length / 2);
    } else if (768 <= screenWidth && screenWidth <= 1024) {
      pagesCount = Math.ceil(categoryProducts.length / 3);
    } else if (screenWidth > 1025) {
      pagesCount = Math.ceil(categoryProducts.length / 8);
    }

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

    let boxesStyler = 'col-3';
    if (pagesCount === 3) {
      boxesStyler = 'col-3';
    } else if (pagesCount === 8) {
      boxesStyler = 'col-4';
    } else if (pagesCount === 12) {
      boxesStyler = 'col-6';
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
                .slice(
                  activePage * (categoryProducts.length / pagesCount),
                  (activePage + 1) * (categoryProducts.length / pagesCount)
                )
                .map(item => (
                  <div key={item.id} className={boxesStyler}>
                    <ProductBox
                      changeFavorites={changeFavorites}
                      changeCompare={changeCompare}
                      getCompared={getCompared}
                      {...item}
                    />
                  </div>
                ))}
            </div>
          </Carousel>
          <div className='styles.carousel'></div>
        </div>
        <ComparedBox getCompared={getCompared} changeCompare={changeCompare} />
      </div>
    );
  }
}

NewFurniture.propTypes = {
  screenWidth: PropTypes.number,
  getCompared: PropTypes.array,
  changeCompare: PropTypes.func,
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
