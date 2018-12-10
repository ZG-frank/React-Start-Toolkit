import React, { Component } from 'react';
import FormBox from '../components/FormBox';

import './index.less';

class Login extends Component {

    render() {
        return (
            <div className="login-form-wrap P_auto">
                <div className="login-title flex-center">
                    <i className="font icon-react m-r-8" />
                    Blog Admin
                </div>
                <FormBox />
            </div>
        )
    }
}

export default Login
