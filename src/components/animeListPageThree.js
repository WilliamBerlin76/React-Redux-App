import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAnimeThree } from '../actions/actions';

const AnimeListPageThree = (props) => {
    console.log(props.anime3)
    useEffect(() => {
        props.fetchAnimeThree()
    }, [])
    
    return(
        <div className="cards-container">
        {props.anime3.map(item => {
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
        anime3: state.anime3,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchAnimeThree }
)(AnimeListPageThree)