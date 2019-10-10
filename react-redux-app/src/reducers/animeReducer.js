import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/actions';

const initialState = {
    anime: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            console.log(action.payload)
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                error: '',
                anime: action.payload
            };
        case FETCH_FAILURE:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            }
        default: 
        return state
    }
}

export default reducer;