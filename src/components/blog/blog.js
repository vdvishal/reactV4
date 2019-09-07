import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';

import './blog.less';

class BlogMain extends React.Component {
  render() {
    return (
      <div>
        <div className="mainlayout">
          <div className="blogHead headStyle">
                Blog
          </div>
          <hr />
          <div className="blogHead blogLayout">
            <Row type="flex" justify="center" align="middle">
              <Col className="blogCard" xs={24} sm={24} md={24} lg={6} xl={6}>
                <img src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
                <div style={{ marginTop: '15px' }}>
                  <div className="blogTitle">
                    <strong>BLOG TITLE</strong>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    By Author
                  </div>
                  <div>
                    20th March 2018
                  </div>

                  <div className="margin">
                    <Button>
                    READ
                    </Button>

                  </div>

                </div>

              </Col>
              <Col className="blogCard" xs={24} sm={24} md={24} lg={6} xl={6}>
                <img src="https://3019k7n47a43swmx51n6yh0l-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/the-streets-of-tokyo-1-610x343.jpg" />
                <div style={{ marginTop: '15px' }}>
                  <div className="blogTitle">
                    <strong>BLOG TITLE</strong>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    By Author
                  </div>
                  <div>
                    20th March 2018
                  </div>

                  <div className="margin">
                    <Button>
                    READ
                    </Button>

                  </div>

                </div>

              </Col>
              <Col className="blogCard" xs={24} sm={24} md={24} lg={6} xl={6}>
                <img src="https://3019k7n47a43swmx51n6yh0l-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/A-foggy-Sydney-Morning-Pat-Kay-Blog-00907-610x343.jpg" />
                <div style={{ marginTop: '15px' }}>
                  <div className="blogTitle">
                    <strong>BLOG TITLE</strong>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    By Author
                  </div>
                  <div>
                    20th March 2018
                  </div>

                  <div className="margin">
                    <Button>
                    READ
                    </Button>

                  </div>

                </div>

              </Col>
              <Col className="blogCard" xs={24} sm={24} md={24} lg={6} xl={6}>
                <img src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
                <div style={{ marginTop: '15px' }}>
                  <div className="blogTitle">
                    <strong>BLOG TITLE</strong>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    By Author
                  </div>
                  <div>
                    20th March 2018
                  </div>

                  <div className="margin">
                    <Button>
                    READ
                    </Button>

                  </div>

                </div>

              </Col>
              <Col className="blogCard" xs={24} sm={24} md={24} lg={6} xl={6}>
                <img src="https://3019k7n47a43swmx51n6yh0l-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/the-streets-of-tokyo-1-610x343.jpg" />
                <div style={{ marginTop: '15px' }}>
                  <div className="blogTitle">
                    <strong>BLOG TITLE</strong>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    By Author
                  </div>
                  <div>
                    20th March 2018
                  </div>

                  <div className="margin">
                    <Button>
                    READ
                    </Button>

                  </div>

                </div>

              </Col>
              <Col className="blogCard" xs={24} sm={24} md={24} lg={6} xl={6}>
                <img src="https://3019k7n47a43swmx51n6yh0l-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/A-foggy-Sydney-Morning-Pat-Kay-Blog-00907-610x343.jpg" />
                <div style={{ marginTop: '15px' }}>
                  <div className="blogTitle">
                    <strong>BLOG TITLE</strong>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    By Author
                  </div>
                  <div>
                    20th March 2018
                  </div>

                  <div className="margin">
                    <Button>
                    READ
                    </Button>

                  </div>

                </div>

              </Col>

            </Row>
            <Row type="flex" justify="center" align="middle" className="blogHead footerBlog">
                    YOUTUBE INSTAGRAM FACEBOOK
            </Row>
          </div>
        </div>
      </div>
    );
  }
}


export default BlogMain;
