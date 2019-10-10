import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAnime } from '../actions/actions';

const AnimeList = (props) => {
    console.log(props.anime)
    useEffect(() => {
        props.fetchAnime()
    }, [])
    
    return(
        <>
        {props.anime.map(item => {
            return(
            <h3>{item.title}</h3>
            )
        })}
        </>
    )
};

const mapStateToProps = state => {
    return {
        anime: state.anime,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchAnime }
)(AnimeList)
