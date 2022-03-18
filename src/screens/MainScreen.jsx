import './MainScreen.css';
import React from 'react';
import Caminho from '../components/Caminho';
import Controles from '../components/Controles';
import Grafico from '../components/Grafico';
import GraficoLabels from '../components/GraficoLabels';


const MainScreen = (props) => {

  return (
    <div className='MainScreen'>
      <div className='Caminho'>
        <Caminho />
      </div>
      <div className='GraficoLabels'>
        <GraficoLabels />
      </div>
      <div className='Grafico'>
        <Grafico />
      </div>
      <div className='Controles'>
        <Controles />
      </div>

    </div>
  )
}

export default MainScreen;
