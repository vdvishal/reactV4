import React from 'react';
import { Link } from 'react-router-dom';

import {
  Row, Col, Card, Icon,
} from 'antd';

import './login.less';

class Login extends React.Component {
  render() {
    return (
      <div className="viewBody clearfix">
        <Row className="head">
          <h1>
           Account
          </h1>
        </Row>
        <hr />
        <Row type="flex" justify="center">
          <Col>
            <div style={{
              fontWeight: 'bold', fontSize: '20px', textAlign: 'center', paddingTop: '40px',
            }}
            >
                  Returning Customer

            </div>
            <form>

              <input type="email" name="email" placeholder="Email" />

              <br />

              <input type="password" name="password" placeholder="password" />
              <br />
              <span>Forgot password ?</span>
              <div>
                <button type="submit" value="Submit" className="subBtn">
                    Login
                </button>
                <br />
                {/* <Link to="/signup"><span className="spanStyle2">Register</span></Link> */}

              </div>
            </form>

          </Col>
          <Col>
            <div style={{
              fontWeight: 'bold', fontSize: '20px', textAlign: 'center', paddingTop: '40px',
            }}
            >
                  New Customer

            </div>
            <form style={{ }}>


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
                    Register
                </button>
                <br />
              </div>
            </form>

          </Col>
        </Row>

      </div>
    );
  }
}

export default Login;
