import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Loading from '@/components/Loading';
import routes from '@/config/routes';
import './index.less';

const Content = Layout.Content;

class Contents extends Component {

    render() {
        return (
            <Content className="content-wrap">
                <Loading>
                    {
                        routes.map(item =>
                            <Route 
                                key={item.path} 
                                path={item.path} 
                                component={item.component} 
                                exact
                            />
                        )
                    }
                </Loading>
            </Content>
        )
    }
}

export default Contents
