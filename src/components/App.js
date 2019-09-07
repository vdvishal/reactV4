import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import ScrollToTop from './reusable/scrollToTop';
// import FooterS from './home/footer';

import Login from './loginSignup/login';
import Signup from './loginSignup/signUp';

import Home from './home/home';
import ProductLayout from './productLayout/layoutProduct';
// import Womencategory from './women';
import Product from './product/product';
import Blog from './blog/blog';
import history from '../history';

const App = () => (
  <Router history={history}>
    <Layout className="layout">

      <ScrollToTop>
        <Route path="/" exact component={Home} />
        <Route path="/collections" exact component={ProductLayout} />
        <Route path="/product" exact component={Product} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/blog" exact component={Blog} />

        {/* <Route path="/women" exact component={Womencategory} />
        <Route path="/products/" exact component={ProductLayout} />
        <Route path="/product/" exact component={ProductInfo} /> */}
      </ScrollToTop>
      {/* <FooterS /> */}
    </Layout>
  </Router>
);


export default App;
