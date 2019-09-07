import React from 'react';
import { Layout, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';

import DrawerS from '../reusable/drawer';

import './header.less';

const { Header } = Layout;

class HeaderS extends React.Component {
    state = {
      visible: false,
      stl: {
        position: 'fixed',
        zIndex: 999,
        width: '100%',
        background: 'rgba(0,0,0,0)',
      },
      menu: {
        lineHeight: '10vh',
        background: 'rgba(0,0,0,0)',
      },
    };

    componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent);
    }

    listenScrollEvent = (e) => {
      if (window.scrollY > 350) {
        this.setState({
          menu: {
            lineHeight: '10vh',
            background: 'white',
            color: 'black',
          },
        });
      } else {
        this.setState({
          menu: {
            lineHeight: '10vh',
            background: 'rgba(0,0,0,0)',
          },
        });
      }
    }


    showDrawer = () => {
      this.setState({
        visible: true,
      });
      console.log(this.state.visible);
    };

    onXClose = (event) => {
      this.setState({
        visible: event,
      });
    };

    dropDown = prop => (
      <Menu style={style.dropDown}>
        <Menu.Item>
          <Link to={`${prop.jacket}`}>
                      Category One
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                      Category two
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                      Category three
          </a>
        </Menu.Item>
      </Menu>

    )

    render() {
      console.log(this.state.stl);

      return (
        <div>
          <Header style={this.state.stl}>
            {/* <div className="logo" /> */}
            <Menu
              mode="horizontal"
              style={this.state.menu}
            >
              <Menu.Item key="1">HOME<Link to="/" /></Menu.Item>
              <Menu.Item key="2">
                <Dropdown overlay={this.dropDown({ jacket: 'women' })}>
                  <div>WOMEN</div>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="3">
                <Dropdown overlay={this.dropDown({ jacket: 'men' })}>
                  <div>MEN</div>
                </Dropdown>
              </Menu.Item>

              <Menu.Item key="4" onClick={this.showDrawer} style={{ float: 'right' }}>CART</Menu.Item>
              <Menu.Item key="5" style={{ float: 'right' }}>LOGIN/SIGNUP<Link to="/login" /></Menu.Item>
            </Menu>
          </Header>
          <DrawerS onClose={this.onXClose} visible={this.state.visible}>
            <div>HELLOS</div>
          </DrawerS>
        </div>

      );
    }
}


const style = {
  header: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
  },
  dropDown: {
    background: 'rgb(255,255,255)',
  },
};

export default HeaderS;
