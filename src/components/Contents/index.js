import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Loading from '@/components/Loading';
import routes from '@/config/routes';
import './index.less';

class Contents extends Component {

    render() {
        return (
            <div className="content-wrap">
                <Loading>
                    {
                        routes.map(item =>
                            <Route 
                                key={item.key} 
                                path={item.path} 
                                component={item.component} 
                                exact
                            />
                        )
                    }
                </Loading>
            </div>
        )
    }
}

export default Contents
