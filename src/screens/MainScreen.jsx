import './MainScreen.css';
import React from 'react';
import Cidades from '../components/Cidades';
import Controles from '../components/Controles';


const MainScreen = (props) => {

  return (
    <div className='MainScreen'>
      <div className='ContainerControles'>
        <Controles />
      </div>
      <div className='ContainerLabels'>Labels</div>
      <div className='ContainerGrafico'>Gráfico</div>
      <div className='ContainerCidades'>
        <Cidades />
      </div>
    </div>
  )
}

export default MainScreen;
