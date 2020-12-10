import './Contacto.css'
import React from 'react'
import Bini from './bini.jpg';


function Contacto() {
    return (
        <div className='main-content'>
            <h2 className='main-title'>Contacto</h2>
            <div className='card'>
                <img className='bini' src={Bini} alt='Bini'></img>
                <p className='card-text'>
                    Andrés Felipe Vélez Restrepo
                    <br></br>
                    +57 310 420 8629
                    <br></br>
                    musicosdefondo@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Contacto;


