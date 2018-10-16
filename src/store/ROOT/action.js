export const ROOT_ChangeLoading = (loading) => (
    {
        type: 'ROOT_LOADING',
        payload: loading
    }
)

export const ROOT_DelayLoading = () => {
    return dispatch => {
        let timer = setTimeout(() =>{
            dispatch(ROOT_ChangeLoading(false));
            clearTimeout(timer);
        }, 500);
    }
}

export const ROOT_ChangeUser = (userInfo) => (
    {
        type: 'ROOT_USERINFO',
        payload: userInfo
    }
)
