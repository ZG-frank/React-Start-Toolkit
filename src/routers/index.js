import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layouts from '../views/Layouts';
import Login from '../views/Login';
import Cookies from 'js-cookie';

@withRouter
class Routers extends Component {
    constructor(props) {
        super(props);
    }

    checkJsessionID = () =>{
        const { location, history } = this.props;
        
        if (location.pathname != '/login') {
            if (!Cookies.get('JSESSIONID')) {
                history.replace('/login');
            }
        } else {
            if (Cookies.get('JSESSIONID')) {
                history.replace('/dashboard');
            }
        }
    }

    componentDidMount() {
        this.checkJsessionID();
    }

    componentWillReceiveProps() {
        this.checkJsessionID();
    }

    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path='/' component={Layouts}/>
            </Switch>
        )
    }
}

export default Routers
