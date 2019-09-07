import React from 'react';
import { Row, Col, Popover } from 'antd';
import './insta.less';

class Insta extends React.Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle">
          <Col className="colStyle" xs={24} sm={24} md={24} lg={10} xl={10}>
            <span className="headStyle">Instagram stories</span>
            <br />
            <hr />
            <span className="paraStyle">Follow us @Trekmonk</span>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ margin: '0 10px', backgroundColor: 'white!important' }}>
            <ul className="wrapper">
              <li><img src="https://images.unsplash.com/photo-1563396933091-64f1b9d7dc15?ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=40" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1563518872771-a36b7cc59727?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1563244629-492bda373b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1563396933091-64f1b9d7dc15?ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=40" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1563396933091-64f1b9d7dc15?ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=40" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1563518872771-a36b7cc59727?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1563244629-492bda373b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1563396933091-64f1b9d7dc15?ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=40" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>
              <li><img src="https://images.unsplash.com/photo-1560412892-620b57e20904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="placeholder" /></li>

            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Insta;
