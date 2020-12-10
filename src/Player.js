import './Player.css';
import Bini from './bini.jpg';
import React from 'react'

function Player(props) {
    return (
        <div className='player'>
            <div className='player-buttons'>
                <i className="fas fa-fast-backward player-button"></i>
                <i className="fas fa-play player-button"></i>
                <i className="fas fa-fast-forward player-button"></i>
            </div>
            <div className='progress-bars'>
                <div className='hr'></div>
                <div className='volume-bar'>
                    <i className="fas fa-volume-up"></i>
                    <div className='hr2'></div>
                </div>
            </div>
            <img className='mini-bini' src={Bini} alt='Bini'></img>             
        </div>
    )
}

export default Player;

// props
