import React from 'react';

import HeaderS from './header';
import Main from './main';
import Featured from './featured';
import Category from './category';
import Blog from './blogs';
import Footer from './footer';
import Insta from './insta';


class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderS />
        <Main />
        <Category />
        <Featured />
        <Blog />
        <Insta />
        <Footer />

      </div>
    );
  }
}

// const style = {
//   video: {
//     height: '100vh',
//     width: '100vw',
//     float: 'left',
//     top: 0,
//     padding: 'none',
//     position: 'fixed',
//   },
// };

export default Home;
