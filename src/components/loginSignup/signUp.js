import React from 'react';

import {
  Row, Col, Card, Icon,
} from 'antd';

import './login.less';

class Signup extends React.Component {
  render() {
    return (
      <div className="viewBody">
        <Row type="flex" justify="center">
          <Col>
            <Card style={{ width: 500 }}>
              <Row className="header">
                <Row type="flex" justify="center">
                    SIGNUP
                </Row>
                {/* <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
                  <Icon type="google" />
                </Row> */}
              </Row>
              <Row style={{ marginTop: '5%', marginBottom: '15%' }}>
                <form style={{ textAlign: 'center' }}>

                  <input type="email" name="email" placeholder="Email" />

                  <br />

                  <input type="password" name="password" placeholder="password" />
                  <br />
                  <input type="text" name="f_name" placeholder="First name" />

                  <br />

                  <input type="text" name="l_name" placeholder="Last name" />
                  <br />
                  <div>
                    <button type="submit" value="Submit" className="subBtn">
                    SIGNUP
                    </button>
                    <br />
                  </div>
                </form>
              </Row>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Signup;
