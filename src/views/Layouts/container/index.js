import React, { Component } from 'react';
import { Layout } from 'antd';
import Cookies from 'js-cookie';
import Headers from '@/components/Headers';
import SiderMenu from '@/components/SiderMenu';
import Contents from '@/components/Contents';
import './index.less';

class Layouts extends Component {

    state = {
        collapsed: false,
    };
    
    logout = () => {
        Cookies.remove('JSESSIONID', { path: '/' });
        Cookies.remove('userName', { path: '/' });

        this.props.history.replace('/login');
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const { collapsed } = this.state;

        return (
            <Layout className="layout-wrap">
                <SiderMenu collapsed={collapsed} />
                <Layout>
                    <Headers
                        collapsed={collapsed}
                        collapse={this.toggle}
                        logout={this.logout}
                    />
                    <Contents />
                </Layout>
            </Layout>
        )
    }
}

export default Layouts