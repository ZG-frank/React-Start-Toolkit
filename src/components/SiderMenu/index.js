import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import menuConfig from '@/config/menu';
import routes from '@/config/routes';
import './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

@withRouter
class SiderMenu extends Component {
    state = {
        keys: [],
        openKeys: []
    }

    getSelectedKey = () => {
        let url = this.props.history.location.pathname,
            route = routes.filter(item => item.path === url)[0];

        if (route) {
            this.setState({ 
                keys: route.key ? [route.key] : [],
                openKeys: route.parent ? [route.parent] : []
            });
        }
    }

    componentDidMount() {
        this.getSelectedKey();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.getSelectedKey();
        }
    }

    handleMenuSelect = (selected) => {
        let url = routes.filter(item => item.key === selected.key)[0].path;
        this.props.history.push(url);
    }

    handleSubMenuChange = (openKeys) => {
        this.setState({ openKeys });
    }
    
    render() {
        return (
            <Sider
                theme="light"
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                <div className="sider-logo">
                    <i className="font icon-react" />
                    {this.props.collapsed ? '' : <span className="m-l-8">Blog Admin</span>}
                </div>
                
                <Menu 
                    mode="inline" 
                    onSelect={this.handleMenuSelect}
                    selectedKeys={this.state.keys}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.handleSubMenuChange}
                >
                    {
                        menuConfig.map(item => item.list && item.list.length > 0 ?
                            <SubMenu 
                                key={item.key} 
                                title={
                                <span>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                                </span>
                            }>
                                {
                                    item.list.map(listItem =>
                                        <Menu.Item key={listItem.key}>
                                            <span>{listItem.title}</span>
                                        </Menu.Item>
                                    )
                                }
                            </SubMenu>
                            :
                            <Menu.Item key={item.key}>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </Menu.Item>
                        )
                    }
                </Menu>
            </Sider>
        )
    }
}

export default SiderMenu
