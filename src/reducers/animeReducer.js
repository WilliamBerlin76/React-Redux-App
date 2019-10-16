import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/actions';
import { START_FETCHING2, FETCH_SUCCESS2, FETCH_FAILURE2 } from '../actions/actions';
import { START_FETCHING3, FETCH_SUCCESS3, FETCH_FAILURE3 } from '../actions/actions';

const initialState = {
    anime: [],
    anime2: [],
    anime3: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            
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
            };
        case START_FETCHING2:
            
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS2:
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                error: '',
                anime2: action.payload
            };
        case FETCH_FAILURE2:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            };    
        case START_FETCHING3:
            
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS3:
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                error: '',
                anime3: action.payload
            };
        case FETCH_FAILURE3:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            };    
        default: 
        return state
    }
}

export default reducer;