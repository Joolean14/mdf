import './Player.css';
import Bini from './bini.jpg';
import React from 'react'
import { Link } from "react-router-dom";


function Player(props) {
    return (
        <div className='player'>
            <div className='player-buttons'>
                <Link>
                <i className="fas fa-fast-backward player-button"></i>
                </Link>
                <Link to ='/calculadora'>
                <i className="fas fa-play player-button"></i>
                </Link>
                <Link>
                <i className="fas fa-fast-forward player-button"></i>
                </Link>
            </div>
            <div className='progress-bars'>
                <div className='hr'></div>
                <div className='volume-bar'>
                    <i className="fas fa-volume-up"></i>
                    <div className='hr2'></div>
                </div>
            </div>
            <Link to='/contacto'>
            <img className='mini-bini' src={Bini} alt='Bini'></img>             
            </Link>
        </div>
    )
}

export default Player;

