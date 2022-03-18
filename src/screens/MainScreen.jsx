import './MainScreen.css';
import React from 'react';
import Cidades from '../components/Cidades';
import Controles from '../components/Controles';
import Labels from '../components/Labels';
import Grafico from '../components/Grafico';


const MainScreen = (props) => {

  return (
    <div className='MainScreen'>
      <div className='ContainerControles'>
        <Controles />
      </div>
      <div className='ContainerLabels'>
        <Labels evolucoes={'100'} distancia={'1125.25'} />
      </div>
      <div className='ContainerGrafico'>
        <Grafico />
      </div>
      <div className='ContainerCidades'>
        <Cidades />
      </div>
    </div>
  )
}

export default MainScreen;
