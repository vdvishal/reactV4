import React from 'react';
import {  Drawer } from 'antd';

class DrawerS extends React.Component {
    
    onXXClose = (bool) => {
        this.props.onClose(false);
    }

    render() {
        return (
            <Drawer
                title={this.props.title}
                placement={this.props.side}
                closable={true}
                onClose={this.onXXClose}
                visible={this.props.visible}
            >
                {this.props.children}
            </Drawer>

        )
    }
}

export default DrawerS
