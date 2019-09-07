/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { Col, Popover } from 'antd';

class ProductCard extends React.Component {
  render() {
    const colorArr = this.props.colors.map(color => (
      <Popover content="#bbb" style={{ backgroundColor: '#bbb' }}>
        <div
          className="colorBox "
          style={{
            backgroundColor: color,
            height: '17.5px',
            width: '17.5px',
            borderRadius: '50%',
            display: 'inline-block',
            margin: '2px',
          }}

          key={color}
        />
      </Popover>
    ));

    if (colorArr) {
      return (
        <Col xs={24} sm={12} md={8} lg={4} xl={4} style={{ margin: '20px 20px' }}>
          <img className="boxShadow" src={this.props.url} style={{ maxHeight: '450px', width: '100%' }} />
          <strong>{this.props.title}</strong>
          <p>{this.props.price}</p>
          <div>
            {colorArr}
          </div>
        </Col>
      );
    }

    return (
      <div>
                oifdvn
      </div>
    );
  }
}
export default ProductCard;
