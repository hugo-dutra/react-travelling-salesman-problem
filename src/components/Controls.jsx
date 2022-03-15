import './Controls.css'
import React, { useContext } from 'react';
import { DataContext } from '../data/DataContext';

const Controls = (props) => {
  const { state, setState } = useContext(DataContext);
  return (
    <div className='Controls'>
      <button onClick={() => {
        setState({
          points: []
        })
      }}>Limpar pontos</button>
    </div>
  )
}

export default Controls;