const initState = {
    loading: false
}

const loginReducer = (state = initState, action) =>{
    const { loading } = action;

    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading
            }
        default:
            return state;
    }
}

export default loginReducer
