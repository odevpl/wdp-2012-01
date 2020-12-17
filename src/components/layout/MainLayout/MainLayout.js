import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promoted from '../Promoted/Promoted';

class MainLayout extends React.Component {
  static propTypes = {
    action: PropTypes.func,
    children: PropTypes.node,
   }

 state = {
   screenWidth: 0,
 }

 handleResize = () => this.setState({
  screenWidth: window.innerWidth

  this.props.action({
       screenWidth: this.state.screenWidth,
     }),
  });

 componentDidMount() {
   this.handleResize();
   window.addEventListener('resize', this.handleResize)
 }

 componentWillUnmount() {
   window.removeEventListener('resize', this.handleResize)
 }

 render() {
   return (
     <div>
         <Header />
         <Promoted />
         {this.props.children}
         <Footer />
     </div>
   );
 }
}

export default MainLayout;
