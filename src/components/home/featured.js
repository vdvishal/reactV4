import React from 'react';
import { Row, Col, Popover } from 'antd';

import ProductCard from '../reusable/productCard';

import women from '../../assests/pictures/products/women1.jpg';
import men from '../../assests/pictures/products/9-1024x1024.jpg';

import './featured.less';

class Featured extends React.Component {
  state = {
    colors: ['#bbb', '#2db7f5', '#87d068', '#f50'],
    url: women,
    url2: men,
    title: 'Product',
    price: 'Price',
    alt: 'img',
  }

  render() {
    return (
      <div className="featured">
        <Row type="flex" justify="center" align="middle">
          <Col className="headStyle" span={24} style={{ textAlign: 'center', fontSize: '50px', paddingBottom: '10px' }}>
            Featured
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
          <ProductCard colors={this.state.colors} url={this.state.url2} title={this.state.title} price={this.state.price} alt={this.state.alt} />
          <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
          <ProductCard colors={this.state.colors} url={this.state.url2} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        </Row>
      </div>
    );
  }
}

export default Featured;
