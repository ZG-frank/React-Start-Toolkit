import Loadable from 'react-loadable';
import DelayLoading from '../components/DelayLoading';

const Dashboard = Loadable({
    loader: () => import('../views/Admin/Dashboard'), 
    loading: DelayLoading, 
    delay: 300
});
const UserList = Loadable({
    loader: () => import('../views/Admin/UserManage/UserList'),
    loading: DelayLoading, 
    delay: 300
});
const UserEdit = Loadable({
    loader: () => import('../views/Admin/UserManage/UserEdit'),
    loading: DelayLoading, 
    delay: 300
});
const postManage = Loadable({
    loader: () => import('../views/Admin/postManage'), 
    loading: DelayLoading, 
    delay: 300
});
const tagManage = Loadable({
    loader: () => import('../views/Admin/tagManage'), 
    loading: DelayLoading, 
    delay: 300
});

export default [{
    'key': 'dashboard',
    'path': '/dashboard',
    'component': Dashboard
}, {
    'key': 'userList',
    'path': '/userManage/userList',
    'parent': 'userManage',
    'component': UserList
}, {
    'key': 'userEdit',
    'path': '/userManage/userEdit',
    'parent': 'userManage',
    'component': UserEdit
}, {
    'key': 'postManage',
    'path': '/postManage',
    'component': postManage
}, {
    'key': 'tagManage',
    'path': '/tagManage',
    'component': tagManage
}]