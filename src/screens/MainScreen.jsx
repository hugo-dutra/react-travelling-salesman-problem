import './MainScreen.css'
import React from 'react'
import Controls from '../components/Controls';
import MainPanel from '../components/MainPanel';
import { useState } from 'react';

const MainScreen = (props) => {
  const [pontos, setPontos] = useState([]);

  const listarPontos = (pontos) => {
    setPontos([...pontos]);
  }

  return (
    <div className='MainScreen'>
      <MainPanel posicaoPontos={listarPontos} />
      <Controls pontos={pontos} />
    </div>
  )
}

export default MainScreen;
