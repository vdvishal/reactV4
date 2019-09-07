import React from 'react';
import {
  Row, Col, Tabs, Button, Icon, Select,
} from 'antd';

const { TabPane } = Tabs;

class Product extends React.Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://cdn.shopify.com/s/files/1/2588/5532/products/green1@2x.jpg?v=1520930398" height="600px" width="435px" />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h3>T-shirt</h3>
              <h2>Rs. 2106</h2>
              <p>
                  A pair of twill woven shorts featuring slanted front pockets
              </p>
              <div>
                <div
                  className="colorBox"
                  style={{
                    backgroundColor: '#687322',
                    height: '17.5px',
                    width: '17.5px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    margin: '2px',
                  }}
                />
              </div>
              <div>
                <h3>Colors Available:</h3>
                <div
                  className="colorBox"
                  style={{
                    backgroundColor: '#687322',
                    height: '17.5px',
                    width: '17.5px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    margin: '2px',
                  }}
                />
                <div
                  className="colorBox"
                  style={{
                    backgroundColor: 'black',
                    height: '17.5px',
                    width: '17.5px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    margin: '2px',
                  }}
                />
                <div
                  className="colorBox"
                  style={{
                    backgroundColor: 'red',
                    height: '17.5px',
                    width: '17.5px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    margin: '2px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <h3>
							Size
                </h3>
                <div>
                  <span className="hoverBox">XL</span>
                  <span className="hoverBox">L</span>
                  <span className="hoverBox">M</span>
                  <span className="hoverBox">S</span>
                </div>
              </div>
              <div>
                <Button>
                ADD TO CART
                </Button>
              </div>
              <div style={{ lineHeight: '25px', marginTop: '25px' }}>
            Vendor: Gecko
                <br />
Categories: Bags, Clothing, Sunglasses
                <br />
Tags:   Clothing, Color Black, Color Blue, Color Green, Color Red, Price $7-$50, short
              </div>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={22} sm={22} md={22} lg={20} xl={20} style={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs defaultActiveKey="1" style={{ width: '100%' }}>
              <TabPane tab="DESCRIPTION" key="1">
              Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.

              </TabPane>
              <TabPane tab="SHIPPING" key="2">
              Estimated between Fri Aug 23 and Wed Aug 28

Will usually ship within 1 bussiness day.
              </TabPane>
              <TabPane tab="WHY BUY FROM US" key="3">
      Content of Tab Pane 3
              </TabPane>
              <TabPane tab="REVIEWS" key="4">
      Content of Tab Pane 3
              </TabPane>
            </Tabs>

          </Col>
        </Row>
        <Row>
          <Col>
            {/* <h2>Related Products:</h2> */}

          </Col>
        </Row>
      </div>
    );
  }
}

export default Product;
