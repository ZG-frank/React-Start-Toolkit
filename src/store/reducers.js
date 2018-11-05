import { combineReducers } from 'redux';
import ROOT from './ROOT/reducer';
import { loginReducer } from '../views/Login';

const reducers = combineReducers({
    ROOT,
    Login: loginReducer
})

export default reducers
