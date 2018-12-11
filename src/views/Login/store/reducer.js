const initState = {
    loading: false
}

const loginReducer = (state = initState, action) =>{
    const { payload } = action;

    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}

export default loginReducer
