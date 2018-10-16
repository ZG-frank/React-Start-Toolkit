import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, Icon } from 'antd';
import Cookies from 'js-cookie';
import { ROOT_ChangeUser } from '@/store/ROOT/action';
import './index.less';

const { Header } = Layout;
const { SubMenu } = Menu;

@connect(
    state => ({ ...state.ROOT }),
    dispatch => bindActionCreators({ ROOT_ChangeUser }, dispatch)
)
class Headers extends Component {

    componentDidMount() {
        let { ROOT_userInfo } = this.props;

        if (ROOT_userInfo.name === '') {
            this.props.ROOT_ChangeUser({
                name: Cookies.get('userName')
            });
        }
    }

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
                                {this.props.ROOT_userInfo.name}
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
