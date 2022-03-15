import './Controls.css'
import React, { useContext } from 'react';
import { DataContext } from '../data/DataContext';

const Controls = (props) => {
  const { points } = useContext(DataContext);

  return (
    <div className='Controls'>
      <button onClick={() => { points.length = 0 }}>Limpar pontos</button>
    </div>
  )
}

export default Controls;