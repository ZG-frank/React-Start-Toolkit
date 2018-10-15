import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './index.less';

const { Header } = Layout;
const { SubMenu } = Menu;

class Headers extends Component {

    render() {
        return (
            <Header className="header-wrap">
                <div className="header-btn" onClick={this.props.collapse}>
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    />
                </div>
                <div className="header-right-wrap">
                    <div className="header-btn">
                        <Icon type="mail" />
                    </div>
                    <Menu mode="horizontal" className="header-menu">
                        <SubMenu
                            title={
                            <span>
                                <Icon className="font-18" type="user" />
                                admin
                            </span>}
                        >
                            <Menu.Item key="logout" onClick={this.props.logout}>
                                Sign out
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </Header>
        )
    }
}

export default Headers
