import axios from 'axios'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const START_FETCHING2 = 'START_FETCHING2';
export const FETCH_SUCCESS2 = 'FETCH_SUCCESS2';
export const FETCH_FAILURE2 = 'FETCH_FAILURE2';

export const START_FETCHING3 = 'START_FETCHING3';
export const FETCH_SUCCESS3 = 'FETCH_SUCCESS3';
export const FETCH_FAILURE3 = 'FETCH_FAILURE3';

export const fetchAnime = () => dispatch => {

    dispatch({ type: START_FETCHING });

    axios
    .get('https://api.jikan.moe/v3/anime/20/episodes')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SUCCESS, payload: res.data.episodes})
    })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err.response})
    })
}

export const fetchAnimeTwo = () => dispatch => {
    
    dispatch({ type: START_FETCHING2 });

    axios
    .get('https://api.jikan.moe/v3/anime/20/episodes/2')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SUCCESS2, payload: res.data.episodes})
    })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE2, payload: err.response})
    })
}

export const fetchAnimeThree = () => dispatch => {
    
    dispatch({ type: START_FETCHING3 });

    axios
    .get('https://api.jikan.moe/v3/anime/20/episodes/3')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SUCCESS3, payload: res.data.episodes})
    })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE3, payload: err.response})
    })
}