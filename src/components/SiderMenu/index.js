import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import menuConfig from '@/config/menu';
import './index.less';

const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;

@withRouter
class SiderMenu extends Component {
    state = {
        keys: []
    }

    selectKey = () =>{
        let keys = [];
        keys.push(this.props.history.location.pathname);
        this.setState({ keys });
    }

    componentDidMount() {
        this.selectKey();
    }

    componentWillReceiveProps (nextProps){
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.selectKey();
        }
    }

    onSelect = ({ key }) =>{
        this.props.history.push(key);
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
                    onSelect={this.onSelect} 
                    selectedKeys={this.state.keys}
                >
                    {
                        menuConfig.map(item =>
                            item.list && item.list.length > 0 ?
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
                                        <Menu.Item key={item.key + listItem.key}>
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
