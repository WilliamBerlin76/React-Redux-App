import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAnime } from '../actions/actions';

const AnimeList = (props) => {
    console.log(props.anime)
    useEffect(() => {
        props.fetchAnime()
    }, [])
    
    return(
        <div className="cards-container">
        {props.anime.map(item => {
            return(
            <div className="episode-card" key={item.episode_id}>   
                <h4>Episode {item.episode_id} 
                    <h3>{item.title}</h3>
                </h4>
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
        anime: state.anime,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchAnime }
)(AnimeList)
