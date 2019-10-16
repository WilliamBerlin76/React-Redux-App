import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAnimeTwo } from '../actions/actions';

const AnimeListPageTwo = (props) => {
    console.log(props.anime)
    useEffect(() => {
        props.fetchAnimeTwo()
    }, [])
    
    return(
        <div className="cards-container">
        {props.anime2.map(item => {
            return(
            <div className="episode-card" key={item.episode_id}>   
                <h4>Episode {item.episode_id}</h4>
                    <h3>{item.title}</h3>
                <p>Japanese Title: {item.title_japanese}</p>
                {item.filler === false ? <p>filler: ❌</p> : <p>filler: ✔</p>}
            </div> 
            )
        })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        anime2: state.anime2,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchAnimeTwo }
)(AnimeListPageTwo)
