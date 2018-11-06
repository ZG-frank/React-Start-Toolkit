import React, { Component } from 'react';
import FormBox from '../components/FormBox';

import './index.less';

class Login extends Component {
    
    render() {
        return (
            <div className="login-form P_auto">
                <div className="login-title flex-center">
                    <i className="font icon-react m-r-8" />
                    <span className="">Blog Admin</span>
                </div>
                <FormBox submit={this.submit} {...this.props}/>
            </div>
        )
    }
}

export default Login
