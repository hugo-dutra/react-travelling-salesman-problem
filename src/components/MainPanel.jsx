import './MainPanel.css'
import React from 'react';
import { useState } from 'react';
import { drawCircle, clearCanvas } from '../services/CanvasService';
import Canvas from './Canvas';

const circles = [];

const MainPanel = (props) => {


  const pontosRecuperados = (pontos) => {
    props.posicaoPontos(pontos)
  }

  return (
    <div className='MainPanel'>
      <Canvas enviarPontos={pontosRecuperados} />
    </div>
  )
}

export default MainPanel;
