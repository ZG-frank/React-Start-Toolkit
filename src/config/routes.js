import Loadable from 'react-loadable';
import DelayLoading from '../components/DelayLoading';

const Dashboard = Loadable({
    loader: () => import('../views/Admin/Dashboard/container'), 
    loading: DelayLoading, 
    delay: 2000
});
const UserList = Loadable({
    loader: () => import('../views/Admin/UserManage/UserList/container'),
    loading: DelayLoading, 
    delay: 2000
});
const UserEdit = Loadable({
    loader: () => import('../views/Admin/UserManage/UserEdit/container'),
    loading: DelayLoading, 
    delay: 2000
});
const PostManage = Loadable({
    loader: () => import('../views/Admin/PostManage/container'), 
    loading: DelayLoading, 
    delay: 2000
});
const TagManage = Loadable({
    loader: () => import('../views/Admin/TagManage/container'), 
    loading: DelayLoading, 
    delay: 2000
});

export default [{
    'key': 'index',
    'path': '/',
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
    'component': PostManage
}, {
    'key': 'tagManage',
    'path': '/tagManage',
    'component': TagManage
}]