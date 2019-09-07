import React from 'react';
import {
  Row, Col, Tag, Slider, Button, Icon, Select,
} from 'antd';
import Media from 'react-media';

import Drawer from '../reusable/drawer';
import ProductCard from '../reusable/productCard';
import women from '../../assests/pictures/products/women1.jpg';
import './layout.less';

const { Option } = Select;

class ProductLayout extends React.Component {
	state = {
	  checked: true,
	  colors: ['#bbb', '#2db7f5', '#87d068', '#f50'],
	  url: women,
	  title: 'Product',
	  price: 'Price',
	  alt: 'img',
	  banner: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',


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


	handleChange = (checked) => {
	  this.setState({ checked });
	};

	render() {
	  return (
  <div>
    <div style={
					{
					  height: '500px',
					  backgroundImage: `url(${this.state.banner})`,
					  backgroundRepeat: 'no-repeat',
					  backgroundSize: 'cover',
					}
				}
    />
    <Drawer title="Filter" side="left" onClose={this.onXClose} visible={this.state.visible}>

      <div style={{ marginBottom: '45px' }}>
        <h2>
							By Category
        </h2>
        <div>
          <div className="hover">Shirts</div>
          <div className="hover">Shirts</div>
          <div className="hover">Shirts</div>
          <div className="hover">Shirts</div>
        </div>
      </div>
      <div style={{ marginBottom: '45px' }}>
        <h2>
							By Color
        </h2>
        <div>

          <div
            className="colorBox"
            style={{ backgroundColor: '#87D068' }}
          />
          <div
            className="colorBox"
            style={{ backgroundColor: '#bbb' }}
          />

          <div
            className="colorBox"
            style={{ backgroundColor: '#bbb' }}
          />

          <div
            className="colorBox"
            style={{ backgroundColor: '#bbb' }}
          />
          <div
            className="colorBox"
            style={{ backgroundColor: '#87D068' }}
          />
          <div
            className="colorBox"
            style={{ backgroundColor: '#bbb' }}
          />

          <div
            className="colorBox"
            style={{ backgroundColor: '#bbb' }}
          />

          <div
            className="colorBox"
            style={{ backgroundColor: '#bbb' }}
          />

        </div>
      </div>
      <div style={{ marginBottom: '45px' }}>
        <h2>
							By Size
        </h2>
        <div>
          <span className="hoverBox">XL</span>
          <span className="hoverBox">L</span>
          <span className="hoverBox">M</span>
          <span className="hoverBox">S</span>
        </div>
      </div>
      <div style={{ marginBottom: '45px' }}>
        <h2>
							By Price
        </h2>
        <div>
          <Slider range defaultValue={[20, 50]} />
        </div>
      </div>
    </Drawer>
    <Row type="flex" justify="center" style={{ paddingTop: '5rem' }}> Category Name </Row>
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={19} lg={19} xl={19} style={{ padding: '0 30px', height: '40px' }}>
        <Button onClick={this.showDrawer} style={{ position: 'absolute', left: '22.5px' }}><Icon type="filter" />Filter</Button>
        <Select
          style={{ width: 200, position: 'absolute', right: '22.5px' }}
          showSearch
          placeholder="Sort By"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Col>

    </Row>
    <Row type="flex" justify="center">
      <Col xs={21} sm={21} lg={19} xl={19} style={{ justifyContent: 'space-evenly', display: 'flex', flexWrap: 'wrap' }}>
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
        <ProductCard colors={this.state.colors} url={this.state.url} title={this.state.title} price={this.state.price} alt={this.state.alt} />
      </Col>
    </Row>
  </div>
	  );
	}
}

const style = {

};

export default ProductLayout;
