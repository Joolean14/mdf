import './Sidebar.css';
import React from 'react' 
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className='sidebar'>
            <h1 className='logo'>MDf</h1>
            <ul className='main-links'>
                <li className='main-link'>
                    <Link className='link' to='/'>Qué Hacemos</Link>
                </li>
                <li className='main-link'>
                    <Link className='link' to='/comolohacemos'>Cómo lo hacemos</Link>
                </li>
                <li className='main-link'>
                <Link className='link' to='/repertorio'>Repertorio</Link>
                </li>
                <li className='main-link'>
                    <Link className='link' to='/contacto'>Contacto</Link>
                </li>
            </ul>
            {/* <div>
                <ul className='genre-links'>
                    <li>Jazz</li>
                    <li>Bolero</li>
                    <li>Salsa</li>
                    <li>Retro Reggaeton</li>
                    <li>Bossa Nova</li>
                    <li>Rock</li>
                    <li>Blues</li>
                    <li>Reggae</li>
                    <li>Funk</li>
                    <li>DJ</li>
                </ul>
            </div>             */}
        </div>
    )
}

export default Sidebar;