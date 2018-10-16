const initState = {
    ROOT_loading: false,
    ROOT_userInfo: {
        name: ''
    }
}

const ROOT = (state = initState , action) => {

    const { type, payload } = action;

    switch (type) {
        case 'ROOT_LOADING':
            return {
                ...state,
                ROOT_loading: payload
            }

        case 'ROOT_USERINFO':
            return {
                ...state,
                ROOT_userInfo: payload
            }

        default:
            return state
    }
}

export default ROOT



