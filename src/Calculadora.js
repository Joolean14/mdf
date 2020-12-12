import './Calculadora.css'
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react';

function Calculadora() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className='main-content'>
        <h2 className='main-title'>Calculadora de Precios</h2>
        <div className='card2'>
        <h2 className='subtitle'>Músicos</h2>
            <button className='calc-btn' onClick={() => setCount(count + 1)}>
                +
            </button>
            <button className='calc-btn' onClick={() => setCount(count - 1)}>
                -
            </button>
            <p className='card-text'>{count}</p>
        <h2 className='subtitle'>Tarima</h2>
        <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}/>
        <h2 className='subtitle'>Luces</h2>
        
        <h2 className='subtitle'>Destino</h2>
        
        <p className='card-text'>Total ${count * 350.000}</p>
        </div>
    </div>
  );
}

export default Calculadora;