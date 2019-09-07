/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Row, Col, Button } from 'antd';

import './category.less';

class Category extends React.Component {
  render() {
    return (
      <div className="main">
        <Row className="headStyle" type="flex" justify="center" align="middle">
          <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ margin: '0 5px ' }}>
            <Row>
              <div className="boxWomen">
                <div className="text">
                WOMEN
                  {' '}
                  <strong>COLLECTIONS</strong>
                </div>
                <div className="subCategoryWomen">
                  <Button type="link" ghost>Shirts
                  </Button>
                  <br />
                  <Button type="link" ghost>Pants
                  </Button>
                  <br />
                  <Button type="link" ghost>Shirts
                  </Button>
                  <br />
                  <Button type="link" ghost>Fleece
                  </Button>
                  <br />
                </div>
              </div>
            </Row>
            <Row>
              <div className="boxBags">
                <div className="text">
                  <strong>BAGS</strong>
                </div>
                <div className="subCategoryWomen">
                  <Button type="link" ghost>Shirts
                  </Button>
                  <br />
                  <Button type="link" ghost>Pants
                  </Button>
                  <br />
                  <Button type="link" ghost>Shirts
                  </Button>
                  <br />
                  <Button type="link" ghost>Fleece
                  </Button>
                  <br />
                </div>
              </div>
            </Row>

          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ margin: '0 5px ' }}>
            <Row>
              <div className="boxAccessories">
                <div className="text"><strong>ACCESSORIES</strong>
                </div>
                <div className="subCategoryWomen">
                  <Button type="link" ghost>Shirts
                  </Button>
                  <br />
                  <Button type="link" ghost>Pants
                  </Button>
                  <br />
                  <Button type="link" ghost>Shirts
                  </Button>
                  <br />
                  <Button type="link" ghost>Fleece
                  </Button>
                  <br />
                </div>
              </div>
            </Row>
            <div className="boxMen">
              <div className="text">MEN
                {' '}
                <strong> COLLECTIONS</strong>
              </div>
              <div className="subCategoryMen">
                <Button type="link" ghost>Shirts
                </Button>
                <br />
                <Button type="link" ghost>Pants
                </Button>
                <br />
                <Button type="link" ghost>Shirts
                </Button>
                <br />
                <Button type="link" ghost>Fleece
                </Button>
                <br />
              </div>
            </div>

          </Col>
        </Row>

      </div>
    );
  }
}


export default Category;
