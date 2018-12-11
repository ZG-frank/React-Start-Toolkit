import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import { Form, Input, Button, Icon, message } from 'antd';
import * as action from '../store/action';
import * as ROOT_action from '@/store/ROOT/action';

const FormItem = Form.Item;

@withRouter
@connect(
    state => ({ ...state.Login }),
    dispatch => bindActionCreators({...ROOT_action, ...action}, dispatch)
)
class FromBox extends Component {
    constructor(props){
        super(props);
    }

    handleSubmit = () => {
        let { form } = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                this.props.changeLoading(true);
                this.timer = setTimeout(() => {
                    let { userName, password } = values;

                    this.props.changeLoading(false);
                    if (userName === 'admin' && password === 'admin') {
                        let message = `Guest&${userName}&${password}`;
                        let sessionKey = 'react_start_toolkit';
                        let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, sessionKey));

                        Cookies.set('JSESSIONID', session, {expires: 1, path: '/'});
                        Cookies.set('userName', userName, {expires: 1, path: '/'});

                        this.props.ROOT_ChangeUser({ name: userName });
                        this.props.history.push('/');
                    } else {
                        message.error('账号：admin；密码：admin');
                    }
                }, 1500)
            }
        });
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { loading } = this.props;

        return (
            <Form className="login-form">
                <FormItem hasFeedback>
                    {
                        getFieldDecorator('userName', {
                            rules: [{ 
                                required: true, 
                                message: '输入admin' 
                            }],
                        })(
                            <Input 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="admin" 
                            />
                        )
                    }
                </FormItem>
                <FormItem hasFeedback>
                    {
                        getFieldDecorator('password', {
                            rules: [{ 
                                required: true, 
                                message: '密码是admin' 
                            }],
                        })(
                            <Input 
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type="password" 
                                placeholder="admin"
                            />
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button 
                        type="primary" 
                        className="submit-btn"
                        loading={loading}
                        onClick={this.handleSubmit}>
                        Sign in
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

FromBox = Form.create()(FromBox);
export default FromBox;
