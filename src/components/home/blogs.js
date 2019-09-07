import React from 'react';
import { Row, Col, Button } from 'antd';
import women from '../../assests/pictures/products/women1.jpg';
import './blogs.less';

class Blog extends React.Component {
  render() {
    return (
      <div className="card">
        <Row type="flex" justify="center" align="middle">
          <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ margin: '0 10px', backgroundColor: 'white!important' }}>
            <div className="colBlog">
              <img src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" style={{ height: '500px', width: '100%' }} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ margin: '0 10px', backgroundColor: 'white!important' }}>
            <div className="colStyle">
              <h1>THE LATEST FROM BLOG </h1>
              <hr />
              <div style={{ marginTop: '15px' }}>
                <div className="headStyle">
                   Blog Title
                </div>
                <div style={{ marginTop: '5px' }}>
                    By Author
                </div>
                <div>
                    20th March 2018
                </div>
                <div style={{ marginTop: '15px' }}>
                Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic...
                </div>
                <div className="uniMargin">
                  <Button style={{ marginRight: '5px' }}>
                    READ
                  </Button>
                  <Button>
                    VIEW MORE
                  </Button>
                </div>

              </div>
            </div>
            <Row />
          </Col>
        </Row>
        {/* <Row type="flex" justify="center" align="middle" style={{ padding: '20px', fontSize: '30px' }}>
              LATEST FROM BLOGS
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={24} sm={24} md={24} lg={7} xl={7} style={{ margin: '0 10px' }}>
            <div className="colBlog">
              <img src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" style={{ height: '350px', width: '100%' }} />
            </div>
            <div style={{ marginTop: '15px' }}>
              <div style={{ marginTop: '15px', fontSize: '15px' }}>
                <strong>Trending 2019</strong>
              </div>
              <div style={{ marginTop: '5px' }}>
                    By Author
              </div>
              <div>
                    20th March 2018
              </div>
              <div style={{ marginTop: '15px' }}>
                Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic...
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={7} xl={7} style={{ margin: '0 10px' }}>
            <div className="colBlog">
              <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" style={{ height: '350px', width: '100%' }} />
            </div>
            <div style={{ marginTop: '15px' }}>
              <div style={{ marginTop: '15px', fontSize: '15px' }}>
                <strong>Trending 2019</strong>
              </div>
              <div style={{ marginTop: '5px' }}>
                    By Author
              </div>
              <div>
                    20th March 2018
              </div>
              <div style={{ marginTop: '15px' }}>
                Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic...
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={7} xl={7} style={{ margin: '0 10px' }}>
            <div className="colBlog">
              <img src="https://images.unsplash.com/photo-1459231978203-b7d0c47a2cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" style={{ height: '350px', width: '100%' }} />
            </div>
            <div style={{ marginTop: '15px' }}>
              <div style={{ marginTop: '15px', fontSize: '15px' }}>
                <strong>Trending 2019</strong>
              </div>
              <div style={{ marginTop: '5px' }}>
                    By Author
              </div>
              <div>
                    20th March 2018
              </div>
              <div style={{ marginTop: '15px' }}>
                Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic...
              </div>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle" style={{ padding: '20px', fontSize: '30px' }}>
          <Button>
              VIEW MORE
          </Button>
        </Row> */}
      </div>
    );
  }
}

export default Blog;
