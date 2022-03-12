import './Controls.css'
import React from 'react';

const Controls = (props) => {
  const { pontos } = props;
  return (
    <div className='Controls'>
      <button onClick={() => { console.log(pontos) }}>Teste</button>
    </div>
  )
}

export default Controls;